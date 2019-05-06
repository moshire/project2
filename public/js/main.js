$(document).ready(function () {

  //Variables assigned to buttons
  var $logOutBtn = $("#log-out");
  var $countryDropDown = $('#drop-down');
  var $songSubmitBtn = $('#song-submit-button');

  //Variables assigned to non-button DOM elements
  var $songTable = $('#song-table');
  var $matchesTable = $('#matches');

  //API object for making api calls
  var API = {

    saveFavoriteSong: function (songId) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/songSelection/" + songId,
        data: JSON.stringify(songId)
      });
    },

    getSongs: function (dataId) {
      return $.ajax({
        url: "api/countrySelection/" + dataId,
        type: "GET"
      });
    },
  };

  //If the user clicks the Log-Out button, the user is routed to the log-in page. 

  var logOut = function () {
    window.location.href = "/logIn";
  };


  //Event handlers

  //Log-out event handler.  This handles the event when the user clicks the log-out button.  It runs 
  //logOut() function which redirects the user's page to the log-in screen.

  $($logOutBtn).on("click", logOut);

  //This event handler is called when the user selects a country from the country dropdown.

  $($countryDropDown).change(function (event) {

    event.preventDefault();

    var $countrySelected = $(this).val();
    API.getSongs($countrySelected).then(function (data) {

      var $songList = data.map(function (songsData) {
        var $li = $("<li>")
          .text("Song Name: " + songsData.name + "    Artist: " + songsData.artist)
          .addClass("song-list")
          .attr("data-song-id", songsData.songId);

        var $button = $('<input type="radio" name="favoriteSong" value=' + songsData.songId + '/>Favorite?');

        $li.append($button);

        return $li;

      });

      $songTable.empty();
      $songTable.append($songList);
    });
  });


  //This event handler will call the saveFavoriteSong API method.
  $($songSubmitBtn).on("click", function (event) {

    event.preventDefault();

    //Change once you understand the DOM structure and can select the appropriate song
    var $songSelected = $('input[name=favoriteSong]:checked').val();

    API.saveFavoriteSong($songSelected).then(function (matchData) {

      var $matchList = matchData.map(function (matchItem) {

        var $li = $("<li>")
          .text(matchItem.name)
          .addClass("person-match")
          .attr("data-person-id", matchItem.userId);

          return $li;
      });

      $matchesTable.append($matchList);
      
    });
  });

});




