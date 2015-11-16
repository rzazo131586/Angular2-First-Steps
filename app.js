var AppComponent = ng.Component({
	selector: 	'my-app',
	template: 	'<h1>Hello Angular-2!</h1>'+
				'<h2>by @robertozazo </h2> '
}).Class({
	constructor: function () { 
		console.log("Hello World");
	}
});

document.addEventListener('DOMContentLoaded', function() {
	ng.bootstrap(AppComponent);
})