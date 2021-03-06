suvApp.controller("dashboardController", ["$scope", "$filter", "userRoutes",
  function($scope, $filter, userRoutes) {
  	$scope.logsData = []
  	$scope.current_user_enrolled = json.current_user_enrolled
  	$scope.enrollUser = function() {
  		userRoutes.make_login({}, function(resp) {
  			$scope.current_user_enrolled = true
        $scope.logsDataLoader()
      })
    }

    $scope.logsDataLoader = function() {
      userRoutes.getLogs({}, function(resp) {
        $scope.logsData = resp.data
  		})
  	}

  	$scope.logsDataLoader()
  }
])