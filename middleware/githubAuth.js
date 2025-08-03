const passport = require("passport");

const initiateGithubAuth = passport.authenticate("github", {
    scope: ["user:email"],
    session: false,
});

const handleGithubCallback = passport.authenticate("github", {
    session: false,
    failureRedirect: "/auth/error",
});

module.exports = {
    initiateGithubAuth,
    handleGithubCallback,
};
