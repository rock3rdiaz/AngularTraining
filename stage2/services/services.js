var app = angular.module('app', []);

app.service('Service', function($window){

	console.info($window);
	this._name = 'ewqerwrwrwr';

	this.getCurrentDate = function(){
		return this._name;
	}
});

app.factory('Factory', function($http){

	console.info($http);

	return {
		getCurrentDate: function(){
			return new Date();
		}
	}
});

app.controller('ServicesCtrl', ['$scope', 'Factory', 'Service', function($scope, Factory, Service){

	console.info('started ...');

	$scope.factory = Factory.getCurrentDate();
	$scope.service = Service.getCurrentDate();
}]);