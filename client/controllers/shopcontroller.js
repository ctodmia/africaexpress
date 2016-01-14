angular.module('africaXpress')
	.controller('ShopController', function($scope, Item){
		console.log('this is the shop controller')
		Item.getAll().success(function(data){
			console.log('this all the data in there', data)
		})


	})