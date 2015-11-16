var AppComponent = ng.Component({
	selector: 	'my-app',
	template: 	'<h1>Angular 2  First Steps</h1>'+
				'<h1><small>by @robertozazo </small></h1> '
}).Class({
	constructor: function () { 
		console.log("Hello World");
	}
});

document.addEventListener('DOMContentLoaded', function() {
	ng.bootstrap(AppComponent);
})