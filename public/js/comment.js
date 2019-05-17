var $jq = jQuery.noConflict();

$jq("#commentBtn").on("click", function() {
  var $formData = $("#commentForm").val();
  var $storyId = $(".select-story").attr("data-story-id");
  console.log($formData + " storyId = " + $storyId);

  var newComment = {
    comment: $formData,
    storyId: $storyId
  };

  $jq
    .post("/api/comment", newComment)
    .then(function(data) {
      console.log("Added " + data);
      // window.location.href = "/comment/" + storyId;
    })
    .then(function() {
      window.location.reload();
      $formData.text("");
    });
});
