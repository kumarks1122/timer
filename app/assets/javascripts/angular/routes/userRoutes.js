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
			},
			make_login: {
				url: '/accounts',
				method: 'post'
			},
			getLogs: {
				url: '/accounts/get_logs',
				method: 'get'
			},
			searchLogs: {
				url: '/accounts/user_logs',
				method: 'get'
			}
		});
		return rule;
	}
])