const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const {
    initiateGithubAuth,
    handleGithubCallback,
} = require("../middleware/githubAuth");

router.get(
    "/github",
    // #swagger.ignore = true
    initiateGithubAuth
);
router.get(
    "/github/callback",
    // #swagger.ignore = true
    handleGithubCallback,
    authController.githubCallback
);

module.exports = router;
