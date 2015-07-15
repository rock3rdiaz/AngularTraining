app.factory('Services', ['Utils', function(Utils){
	return {
		login: function(username, password){
			console.info(username + ' - ' + password);
			return username == 'admin' && password == 'admin';
		},

		reverse: function(string){
			return Utils.reverse(string);
		}
	}
}]);