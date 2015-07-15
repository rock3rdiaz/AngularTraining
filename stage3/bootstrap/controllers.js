app.controller('IndexCtrl', 
	['$scope', 'Services', 'Utils', function($scope, Services, Utils){

	console.info('started ...');

	$scope.flags = {
		view: false,
		session: false
	};
	
	// user model
	$scope.user = {
		username: '',
		password: ''
	};

	/**
	 * Login function.
	 * 
	 * @return {[type]} [description]
	 */
	$scope.login = function(){
		if(Services.login($scope.user.username, $scope.user.password)){
			$scope._configAlert('success', 'Bienvenido!');
			$scope._cssConfig(0);
			$scope.flags.session = true;
		} else{
			$scope._configAlert('danger', 'Datos no validos :(');		
			$scope._cssConfig(1);	
			$scope.flags.session = false;
		}
		$scope.flags.view = true;
	};

	/**
	 * CSS input configuration.
	 * 
	 * @param  {[int]} status [Status code. {0: error, 1: ok}]
	 * @return {[type]}        [description]
	 */
	$scope._cssConfig = function(status){
		if(status == 1){
			$scope.inputs = {
				'border-color': 'red'
			}	
		} else{
			$scope.inputs = {
				'border-color': 'green'
			}	
		}
	}

	/**
	 * Show a alert.
	 * 
	 * @return {[type]} [description]
	 */
	$scope._configAlert =  function(_status, _msg){
		$scope.alert = {
			status: _status,
			msg: _msg
		}
	};
}]);

app.controller('SongsCtrl', 
	['$scope', 'Services', 'Utils', function($scope, Services, Utils){
	
	// Songs array
	$scope.songs = [];

	// Show or hide flag
	$scope.flag = false;

	// Song item
	$scope.song = {
		name: '',
		artist: '',
		album: ''
	};

	$scope.validation = function(){
		return ($scope.song.name == '' || $scope.song.artist == '' 
			|| $scope.song.album == '') ? false : true;
	};

	$scope.add = function(song){

		console.info(song)

		if(!$scope.validation()){
			$scope.showMessage('Un momento! Campos vacios :(');
			return;
		}

		var item = {
			artist: song.artist,
			name: song.name,
			album: song.album,
			code: Services.reverse(song.artist + song.name + song.album)
		};

		$scope.songs.push(item);

		$scope.song = {
			name: '',
			artist: '',
			album: ''
		};
		$scope.flag = false;
	};

	$scope.showMessage = function(msg){
		alert(msg);
	};

	$scope.remove = function(){

	};
}]);