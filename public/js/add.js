// Code here handles what happens when a user submits a new story on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn

var $jq = jQuery.noConflict();
$jq("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newStory obj
  var newStory = {
    // name from name input
    routeName: "n/a",

    // role from title input
    title: $jq("#title")
      .val()
      .trim(),
    // age from summary  input
    story: $jq("#story")
      .val()
      .trim()
  };
  console.log(newStory);
  // send an AJAX POST-request with jQuery
  $jq
    .post("/api/new", newStory)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a story with an alert window
      alert("Adding story...");
    });

  // empty each input box by replacing the value with an empty string

  $("#title").val("");
  $("#story").val("");
});
