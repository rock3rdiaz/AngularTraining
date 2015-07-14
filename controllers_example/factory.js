app.factory('Factory', function(){
	return {
		URL: '10.123.9.23',
		aux: '',

		getURL: function(){
			return 'IP from method: ' + this.URL;
		}
	}
});