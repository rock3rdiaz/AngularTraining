app.controller('IndexCtrl', ['$scope', function($scope){

	console.info('IndexCtrl started ...');

	$scope.alerts = [
    	{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    	{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  	];

  	$scope.addAlert = function() {
    	$scope.alerts.push({msg: 'Another alert!'});
  	};

  	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
}]);


app.controller('CarouselCtrl', function ($scope) {

	console.info('CarouselCtrl started ...');
 	
 	$scope.myInterval = 5000;
  	var slides = $scope.slides = [];
  
  	$scope.addSlide = function() {
    	var newWidth = 600 + slides.length + 1;
    	
    	slides.push({
      		image: 'http://placekitten.com/' + newWidth + '/300',
      		text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        	['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    	});
  	};
  
  	for (var i=0; i<4; i++) {
    	$scope.addSlide();
  	}
});
