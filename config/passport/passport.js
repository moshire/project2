// Import bcrypt for securing passwords
var bCrypt = require("bcrypt-nodejs");

// Initialize the passport-local strategy and the user model, which will be passed as an argument
module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;
  // Define custom strategy with our instance of LocalStrategy
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      // Handle user info, including hashed passwords
      function(req, email, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        // Check whether the user already exists. If not, add them
        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              email: email,

              password: userPassword,

              firstName: req.body.firstName,

              lastName: req.body.lastName,

              username: req.body.username
            };

            User.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );
  // Serialize function for saving the user id to the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  // Deserialize user
  passport.deserializeUser(function(id, done) {
    User.findByPk(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
  //LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // By default, local strategy uses username and password. Will override with email

        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var User = user;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            email: email
          }
        })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: "That email is not registered."
              });
            }
            // Compare password entered with the bCrypt comparison method
            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Sorry! Something went wrong with your sign-in."
            });
          });
      }
    )
  );
};
