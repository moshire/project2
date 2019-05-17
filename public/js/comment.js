var $jq = jQuery.noConflict();

$jq("#commentBtn").on("click", function(event) {
  event.preventDefault();
  var $formData = $("#commentForm").val();
  var $storyId = $(".select-story").attr("data-story-id");
  console.log($formData + " storyId = " + $storyId);

  var newComment = {
    comment: $formData,
    storyId: $storyId
  };

  $jq.post("/api/comment", newComment, function(data) {
    console.log("Added " + data);
    console.log("Just finished Ajax request");
    location.reload(true);
    $formData.text("");
  });
});
