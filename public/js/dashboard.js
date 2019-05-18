$(document).ready(
  // Log out user when clicking logout button
  $(".logoutButton").on("click", function(event) {
    window.location.href = "/logout";
  })
);
