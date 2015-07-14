app.controller('TwoCtrl', ['$scope', '$window', 'Factory', function($scope, $window, Factory){

	console.info('Controller two started ...');
	$scope.aux_on_ct = $window.aux;

	$scope.getURL =  function(){
		 $scope.url = Factory.URL;
	}

}]);