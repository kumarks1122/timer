suvApp.controller("userController", ["$scope", "$filter","userRoutes", "Notification",
  function($scope, $filter, userRoutes, Notification) {
    $scope.loginUser = {}
    $scope.signupUser = {}
    $scope.login = function() {
      Notification.clearAll()
      userRoutes.login({user: $scope.loginUser},function(resp) {
        setSessionInfo(resp.token)
        Notification.success({message: "Logged in successfully", delay: 1000})
        setTimeout(function() {
          location.href = '/'
        },1500)
      },function(error) {
        Notification.error({message: error.data.message, delay: 3000})
        console.log(error.message)
      })
    }

    $scope.signup = function() {
      userRoutes.signup({user: $scope.signupUser},function(resp) {
        setSessionInfo(resp.token)
        location.href = '/thankyou'
      },function(error) {
        console.log(error.data.message)
        Notification.clearAll()
        Notification.error({message: error.data.message, delay: 3000})
      })
    }
  }
])