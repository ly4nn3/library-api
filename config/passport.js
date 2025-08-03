const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL:
                process.env.GITHUB_CALLBACK_URL ||
                "http://localhost:3000/auth/github/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({
                    githubId: profile.id,
                });

                if (user) {
                    return done(null, user);
                }

                user = await User.create({
                    githubId: profile.id,
                    username: profile.username,
                    displayName: profile.displayName,
                    email: profile.emails?.[0]?.value || "",
                    avatarUrl: profile.photos?.[0]?.value || "",
                    profileUrl: profile.profileUrl || "",
                });
                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);

module.exports = passport;
