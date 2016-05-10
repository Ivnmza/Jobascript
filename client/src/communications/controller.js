module.exports = function ($scope, $state, Comm, currentCompany) {
  console.log("Current Company: ", currentCompany.name);

  // LOAD SCRIPT ON PAGE LOAD 
  var googleScript = document.createElement('script');
  googleScript.setAttribute('src', 'https://apis.google.com/js/client.js');
  googleScript.setAttribute('id', 'onetime');
  if (!document.getElementById('onetime')) {
    document.head.appendChild(googleScript);
  }

//=================================================================================
//                     GLOBAL VARIABLES
//=================================================================================
  var authToken;
  $scope.authButton = true;
//=================================================================================


//=================================================================================
//                      MAIN FUNCTIONS
//=================================================================================

  // $scope.auth SENDS A REQUEST TO GOOGLE FOR AN AUTHORIZATION TOKEN
  $scope.auth = function () {
    Comm.checkAuth().then(function(token) {
      console.log('token: ', token);
      $scope.handleAuth(token);
    });
  };

  // $scope.handleAuth CHECKS IF AUTH TOKEN COMES BACK, AND HAS NO ERROR
  // UPON SUCCESS, A getEmail CALL CAN BE MADE
  // UPON ERROR, AUTH BUTTON APPEARS
  $scope.handleAuth = function(token) {
    if(token && !token.error) {
      $scope.getEmails(currentCompany);
    } else {
      $scope.authButton = true;
    }
  };

  // $scope.getEmails MAKES A GMAIL API CALL TO RETRIEVE A LIST OF EMAILS
  // WITH CURRENT COMPANY AS A QUERY PARAMETER
  $scope.getEmails = function(company) {
    Comm.getEmails(company).then(function (emails) {
      console.log('emails here: ', emails);
      $scope.$apply(function() {
        $scope.emails = emails;
      });
    });
  };
//=================================================================================
  // ON PAGE LOAD. REQUEST TO CHECK AUTH
  $scope.auth();

};