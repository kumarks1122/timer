suvApp.controller("userController", ["$scope", "$filter","userRoutes", "Notification",
  function($scope, $filter, userRoutes, Notification) {
    $scope.loginUser = {}
    $scope.signupUser = {}
    $scope.dateFilter = new Date()
    $scope.appliedDateFilter = undefined
    $scope.login = function() {
      userRoutes.login({user: $scope.loginUser},function(resp) {
        location.href = "/"
      },function(error) {
        console.log(error.message)
      })
    }

    $scope.searchLogs = function() {
      userRoutes.searchLogs({date: moment($scope.dateFilter).utc()},function(resp) {
        $scope.appliedDateFilter = angular.copy($scope.dateFilter)
        $scope.logsData = resp.data
      },function(error) {
        console.log(error.message)
      })
    }

    $scope.signup = function() {
      $scope.signupUser.password_confirmation = $scope.signupUser.password
      userRoutes.signup({user: $scope.signupUser},function(resp) {
        location.href = '/thankyou'
      },function(error) {
        console.log(error.data.message)
      })
    }
  }
])