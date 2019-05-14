var models = require("../models/");
var Story = models.story;
var Users = models.user;

var exports = (module.exports = {});

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

exports.comment = function(req, res) {
  var hbsObject = {
    story: req.body
  };
  res.render("comment", req.body);
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
