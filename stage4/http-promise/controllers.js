app.controller('HttpCtrl', ['$scope', '$http', '$modal', '$q', function($scope, $http, $modal, $q){

	console.info('IndexCtrl started ...');

	$scope.sendRequest = function(){

		$scope.loading();

		$http.get('http://jsonplaceholder.typicode.com/posts/1')
			.success(function(data, status, headers, config) {

				console.info(data);

				$scope.server_data = data;
				$scope.server_status = status;
				$scope.server_headers = headers;
				$scope.server_config = config;

				$scope.finish();

			})
			.error(function(data, status, headers, config) {

				console.info(data);
				$scope.finish();
			});
	};

	$scope.sendRequestPromise = function(){

		$scope.loading();
		var _promise = $scope.request();

 		console.info(_promise);

		_promise.then(function(response){
			console.info('on then method');
			console.info(response);

			$scope.server_data = response;
			$scope.server_status = response.status;
			$scope.server_headers = response.headers;
			$scope.server_config = response.config;
		});
		_promise.catch(function(response){
			console.info('on catch method');
			console.info(response);
		});
		_promise.finally(function(response){
			console.info('on finally method');
			console.info(response);

			$scope.finish();
		});
	};

	$scope.sendRequestRealPromise = function(){

		var promise = $scope.promiseInit();
		promise.then(function(data){
			
			console.info(data);

			$scope.server_data = data;
			$scope.server_status = data.status;
			$scope.server_headers = data.headers;
			$scope.server_config = data.config;

		}).catch(function(data){
			console.info(data);

		}).finally(function(data){
			console.info(data);
		});
	};

	$scope.request = function(){
		return $http.get('http://jsonplaceholder.typicode.com/posts/1');
	}

	$scope.promiseInit = function(){	

		$scope.loading();	

		var defered = $q.defer(); // Productor
		var promise = defered.promise; // Consumidor
		var _request = $scope.request();
		
		_request.success(function(data){
			defered.resolve(data);
			$scope.finish();
		});
		_request.error(function(error){
			defered.reject(error);
			$scope.finish();
		});

		return promise;
	};

	$scope.loading = function(){
		$scope.modalInstance = $modal.open({
      			animation: true,
		    	templateUrl: 'myModalContent.html',
    		});
	};

	$scope.finish = function(){
		$scope.modalInstance.dismiss('cancel');
	};
}]);