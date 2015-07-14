app.controller('HomeCtrl', function($scope){
	
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
			album: song.album
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
});