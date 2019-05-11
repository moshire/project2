// Code here handles what happens when a user submits a new story on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newStory obj
    var newStory = {
      // name from name input
      name: $("#name").val().trim(),
      // role from title input
      title: $("#title").val().trim(),
      // age from summary  input
      summary: $("#summary").val().trim(),
      
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newStory)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a story with an alert window
        alert("Adding story...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#title").val("");
    $("#summary").val("");
   
  
  });
  