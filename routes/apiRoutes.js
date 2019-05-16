var models = require("../models/");
var Story = models.story;

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Story (or all stories) then provides JSON
  app.get("/api/:story?", function(req, res) {
    if (req.params.story) {
      // Display the JSON for ONLY that story.
      // (Note how we're using the ORM here to run our searches)
      Story.findOne({
        where: {
          routeName: req.params.story
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Story.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new story...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var story = req.body;
    console.log(req.session.passport.user);
    var routeName = story.title.replace(/\s+/g, "").toLowerCase();

    // Then add the story to the database using sequelize
    Story.create({
      routeName: routeName,

      title: story.title,
      story: story.story,
      userId: req.session.passport.user
    });

    res.status(204).end();
  });
};
