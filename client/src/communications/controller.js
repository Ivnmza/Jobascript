module.exports = function ($scope, Comm, currentCompany, emails, $state) {
  // console.log(currentCompany);
  // var theEmails = [];
  $scope.myEmails = emails;


  // need to check auth first
  

  // $scope.auth = function() {
  //   console.log('check auth');
  //   Comm.checkAuth().then(function () {
  //     console.log('get emails');
  //     Comm.getEmails(currentCompany).then(function (emails) {
  //       console.log('emails here: ', emails);
  //       $scope.emails = emails;
  //       console.log('$scope.emails ', $scope.emails);
  //     });
  //   });
  // };

  $scope.auth = function () {
    Comm.checkAuth()
    .then(function() {
      console.log('authoized');
      $state.reload();
    });
  };

  $scope.getEmails = function () {
    Comm.getEmails(currentCompany).then(function (emails) {
      console.log('b ', $scope.myEmails);
      updateEmails(emails);
      console.log('a ', $scope.myEmails);
    });
  };

  function updateEmails(emails) {
    $scope.myEmails = emails;
  }
};
