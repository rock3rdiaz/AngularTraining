app.controller('OneCtrl', ['$scope', '$window', 'Factory', function($scope, $window, Factory){

	console.info('Controller one started ...');
	$scope.data = '';

	$window.aux = $scope.data;
	console.info($window.aux);

	$scope.getURL =  function(){
		 $scope.url = Factory.getURL();
	}

}]);