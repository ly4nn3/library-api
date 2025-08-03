const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        githubId: { type: String, required: true, unique: true },
        username: { type: String, required: true, trim: true },
        displayName: { type: String },
        email: { type: String },
        avatarUrl: { type: String },
        profileUrl: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("User", UserSchema);
