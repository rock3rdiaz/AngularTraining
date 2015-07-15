app.service('Utils', function(){
	this.reverse = function(string){
    	return string.split("").reverse().join("");
	}
});