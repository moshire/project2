// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);

  app.get("/", authController.signin);

  app.get("/signin", authController.signin);

  app.get("/view", isLoggedIn, authController.view);

  app.get("/add", isLoggedIn, authController.add);

  app.get("/all", isLoggedIn, authController.all);

  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.get("/logout", authController.logout);

  app.get("/comment/:storyId?", isLoggedIn, authController.comment);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/view",

      failureRedirect: "/signup"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/view",

      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/signin");
  }
};
