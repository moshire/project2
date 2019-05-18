// Code here handles what how the page displays all of the stories
// It pings the server. The server then pings the database and displays all of the stories.

// // make a get request to our api to grab every story
// $.get("/api", function(data) {
//   // for each story that our server sends us back
//   for (var i = 0; i < data.length; i++) {
//     // create a parent div for the oncoming elements
//     var wellSection = $("<div>");
//     // add a class to this div: 'well'
//     wellSection.addClass("well");
//     // add an id to the well to mark which well it is
//     wellSection.attr("id", "story-well-" + data[i].id);
//     // append the well to the well section
//     $("#well-section").append(wellSection);

//     // the title an h3,
//     $("#story-well-" + i).append("<h3>Title: " + data[i].title + "</h4>");
//     // the summary an h3,
//     $("#story-well-" + i).append("<h3>Story: " + data[i].story + "</h4>");
//   }
// });

//When the user selects a story on the story page it takes them to the comments page.
//This code grabs all of the values about the story which are stored in html data tags
//and passes these tabs to handlebars (via api call).
$(document).ready(
  $(".select-story").on("click", function(event) {
    event.preventDefault();

    // var selectedStory = {
    //   id: $(this).data("story-id"),
    //   userId: $(this).data("user-id"),
    //   overallRating: $(this).data("overall-rating"),
    //   user: {
    //     firstName: $(this).data("first-name"),
    //     lastName: $(this).data("last-name"),
    //     username: $(this).data("username")
    //   },
    //   story: $(this).data("story")
    // };

    var storyId = $(this).data("story-id");
    window.location.href = "/comment/" + storyId;
  }),
  // Log out user when clicking logout button
  $(".logoutButton").on("click", function(event) {
    window.location.href = "/logout";
  })
);
