var models = require("../models/");
var Story = models.story;
var Users = models.user;
var Comment = models.comment;

var exports = (module.exports = {});

exports.comment = function(req, res) {
  console.log("HEY THERE!!!! " + req.params.storyId);
  var storyId = req.params.storyId;

  Story.findAll({
    where: {
      id: storyId
    },
    include: [
      {
        model: Users,
        required: true
      }
    ]
  }).then(function(data) {
    var hbsObject = {
      story: data
    };

    Comment.findAll({
      where: {
        storyNum: storyId
      },
      include: [
        {
          model: Users,
          required: true
        }
      ]
    }).then(function(commentData) {
      hbsObject.comment = commentData;

      console.log(hbsObject);
      res.render("comment", hbsObject);
    });
  });
};

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.view = function(req, res) {
  res.render("view");
};

exports.add = function(req, res) {
  res.render("add");
};

// exports.comment = function(req, res) {
//   Story.findAll({
//     include: [
//       {
//         model: Users,
//         required: true
//       }
//     ]
//   }).then(function(data) {
//     var hbsObject = {
//       story: data
//     };
//     res.render("comment", hbsObject);
//   });
// };

exports.all = function(req, res) {
  Story.findAll({
    include: [
      {
        model: Users,
        required: true
      }
    ]
  }).then(function(data) {
    var hbsObject = {
      story: data
    };
    res.render("all", hbsObject);
  });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
