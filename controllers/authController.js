const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            githubId: user.githubId,
            username: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );
};

exports.githubCallback = (req, res) => {
    try {
        const token = generateToken(req.user);

        res.json({
            success: true,
            token,
            user: {
                id: req.user._id,
                username: req.user.username,
                displayName: req.user.displayName,
                avatarUrl: req.user.avatarUrl,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: {
                message: "Failed to generate token",
                details: err.message,
            },
        });
    }
};

exports.getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found",
            });
        }

        res.json({
            success: true,
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

exports.verifyToken = (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({
            success: false,
            error: "Token is required",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({
            success: true,
            valid: true,
            user: decoded,
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            valid: false,
            error: {
                message: "Invalid or expired token",
                details: err.message,
            },
        });
    }
};

exports.refreshToken = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found",
            });
        }

        const newToken = generateToken(user);

        res.json({
            success: true,
            token: newToken,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};
