var app = angular.module('app', []);

app.controller('DirectiveCtrl', ['$scope', function($scope){

	console.info('started ...');
}]);

app.directive('directiveA', function(){
	return {
		template: '<p>Directiva en modo "A"</p>',
		restrict: 'A',
	};
});

app.directive('directiveE', function(){
	return {
		template: '<p>Directiva en modo "E"</p>',
		restrict: 'E',
	};
});

app.directive('directiveC', function(){
	return {
		template: '<p>Directiva en modo "C"</p>',
		restrict: 'C',
	};
});

app.directive('directiveLoadTemplate', function(){
	return {
		templateUrl: './_template.html',
		restrict: 'AEC',
	};
});