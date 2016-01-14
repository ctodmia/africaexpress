angular.module('camerXpress', [
	'ui.router',
	'ngMaterial',
	'ngAria',
	'ngAnimate',
	'ngFileUpload',
	'ngImgCrop'
	])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'views/homeView.html',
		controller: 'HomeController'
	})
	.state('shop', {
		url: '/shop', 
		templateUrl: 'views/shopView.html',
		controller: 'ShopController'
	})
	.state('sell', {
		url: '/sell',
		templateUrl: 'views/sellView.html',
		controller: 'SellController'
	})

	$urlRouterProvider.otherwise('/');
}])