angular.module('africaXpress')
	.controller('ShopController', function($scope, Item){
		$scope.allItems;

		$scope.getAll = function () {
			Item.getAll().success(function(data){
				$scope.allItems = data
			});
		};
		
		$scope.getAll();
	});