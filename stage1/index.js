var app = angular.module('app', []);

app.controller('IndexCtrl', ['$scope', function($scope){
	console.info('Started ...');

	window.scope_i1 = $scope;

	$scope.data = {
		name: 'name one'
	};
}]);

app.controller('Index2Ctrl', ['$scope', function($scope){
	console.info('Started ...');

	window.scope_i2 = $scope;

	$scope.data = {
		name: 'name two'
	};
}]);