$(document).ready(function(){

  //Buttons
  var $loginBtn = $("#login-button");
  var $registerBtn = $("#register-button");

  //Input fields
  var $userInput = $('#username');
  var $password = $('#inputPassword');


  //Redirects user to the register page
  var handleRegistration = function(){
    window.location.href = "/register";
  };


  var handleAuthentication = function(){

  };

  //Event handlers
  $($loginBtn).on("click", handleAuthentication);
  $($registerBtn).on("click", handleRegistration);


});