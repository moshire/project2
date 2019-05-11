var db = require("../models");
var Story = require("../models/story");


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

    
    var routeName = story.name.replace(/\s+/g, "").toLowerCase();

    // Then add the story to the database using sequelize
    Story.create({
      routeName: routeName,
      name: story.name,
      title: story.title,
      summary: story.summary,
     
    });

    res.status(204).end();
  });
};

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
