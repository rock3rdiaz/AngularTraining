var app = angular.module('app', []);

// Customizer filters
app.filter('ages', function(){
	return function(string){
		age = string || '';
		return age + ' años';
	}
});

// Controller
app.controller('FilterCtrl', ['$scope', function($scope){

	console.info('started ...');

	$scope.employees = [
		{
			name: 'Arturo',
			last_name: 'Mejia',
			age: 23,
			date: new Date(),
			salary: 120,
			nickname: 'la rocka'
		},
		{
			name: 'Arturo',
			last_name: 'Gutierrez',
			age: 35,
			date: new Date(),
			salary: 420,
			nickname: 'El capo'
		},		
		{
			name: 'Luisa Maria',
			last_name: 'Bustamante',
			age: 17,
			date: new Date(),
			salary: 90,
			nickname: 'La niña'
		},
		{
			name: 'Carlos Manuel',
			last_name: 'Trujillo',
			age: 34,
			date: new Date(),
			salary: 230,
			nickname: 'El truji'
		}
	];

}]);