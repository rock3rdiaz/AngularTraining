var app = angular.module('app', []);
app.value('username', 'rocker')

app.controller('IndexCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
		window.scope = $scope;

		$scope.data = {
			name: 'testing',
			msg: '...'
		};

		$rootScope.mail = 'rockerdiaz@gmail.com';

		$scope.msg = function(msg){
			console.info('hey ya! ' + msg);
		}
	}]);

app.controller('HomeCtrl', ['$scope', '$http', '$rootScope', 'username', function($scope, $http, $rootScope, username){
		window.scope2 = $scope;
		console.info($rootScope.mail);
		console.info(username);
	}]);