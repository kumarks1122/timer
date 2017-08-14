suvApp.factory('userRoutes', ["$resource",
	function($resource) {
		var rule = $resource('/users', {
			id: '@id'
		}, {
			login: {
				url: '/users/sign_in.json',
				method: 'POST'
			},
			signup: {
				url: '/users.json',
				method: 'POST'
			}
		});
		return rule;
	}
])