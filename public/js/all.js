// Code here handles what how the page displays all of the stories
// It pings the server. The server then pings the database and displays all of the stories.

// make a get request to our api to grab every story
$.get("/api", function(data) {
  // for each story that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "story-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);

    // make the name an h2,
    $("#story-well-" + i).append("<h2>" + data[i].name + "</h2>");
    // the title an h3,
    $("#story-well-" + i).append("<h3>Title: " + data[i].title + "</h4>");
    // the summary an h3,
    $("#story-well-" + i).append("<h3>Summary: " + data[i].summary + "</h4>");
  }
});
