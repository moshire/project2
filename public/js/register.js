$(document).ready(function () {

  //Button variable
  var submitBtn = $("#register-submit");

  //Input form data
  var registrationData = {
    userName: $('#inputUsername').val().trim(),
    password: $('#inputPassword').val().trim(),
    emailAddress: $('#email-address').val().trim(),
    country: $('#country').val().trim()
  }


  //Defining API getCountries method.  This will retrieve the list of countries for the dropdown box.
  var API = {
    getCountries: function () {
      return $.ajax({
        url: "api/countryList/",
        type: "GET"
      });
    },
  };


//This function checks to see if any of the form values are empty.  It is called by the 
//handleSubmission function below.
  var checkForEmptyValues = function (regObj) {
      var IsEmpty = false;

      for(var prop in regObj){
        if(typeof RegObj[prop] !== 'function'){
            if(RegObj[prop] === ""){
              IsEmpty = true;
            }
        }
      }

      return IsEmpty;
     
  }


  //This function handles the submission of the user registration data.  It calls the 
  //checkForEmptyValues function to determine if the user entered any empty values.  If not, it
  //will send an ajax POST request with the user's data.
  var handleSubmission = function (regData) {

    if(checkForEmptyValues(regData)){
        alert("Please enter information for all fields provided.");
    }

    else{
      
      console.log(regData);

      $.ajax("/api/register", {
        type:"POST",
        data: JSON.stringify(regData)
      }).then(
        function(){
          console.log("Created user: " + regData.userName);
        }
      )
    }
  };


  //Event handler - single submission button on registration page.
  $(submitBtn).on("click", handleSubmission(registrationData));

  //Loading countries for the dropdown menu
  API.getCountries().then(function(data){
    location.reload();
  });

});
