suvApp.controller("userController", ["$scope", "$filter","userRoutes", "Notification",
  function($scope, $filter, userRoutes, Notification) {
    $scope.loginUser = {}
    $scope.signupUser = {}
    $scope.loginError = {}
    $scope.signupError = {}
    $scope.isLoading = false
    $scope.dateFilter = new Date()
    $scope.users = []
    $scope.appliedDateFilter = undefined
    if (typeof(json)!="undefined" && json.users!=undefined) {
      $scope.users = json.users
    }

    $scope.login = function() {
      $scope.loginError = {}
      $scope.isLoading = true
      userRoutes.login({user: $scope.loginUser},function(resp) {
        location.href = "/"
        $scope.isLoading = false
      },function(error) {
        $scope.loginError = angular.copy(error.data)
        console.log(error.message)
        $scope.isLoading = false
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

    $scope.deleteUser = function(user, index) {
      userRoutes.delete({id: user.id},function(resp) {
        $scope.users.splice(index, 1)
        Notification.success({message: "User deleted successfully", delay: 3000})
      },function(error) {
        console.log(error.message)
      })
    }

    $scope.signup = function() {
      $scope.isLoading = true
      $scope.signupError = {}
      $scope.signupUser.password_confirmation = $scope.signupUser.password
      userRoutes.signup({user: $scope.signupUser},function(resp) {
        location.href = '/thankyou'
        $scope.isLoading = false
      },function(error) {
        $scope.signupError = angular.copy(error.data)
        console.log(error.data.message)
        $scope.isLoading = false
      })
    }
  }
])