angular.module('africaXpress')
	.controller('SellController', function($scope, Upload, $timeout, Item){
		console.log('this is the sell controller')
		$scope.displayPic;
		$scope.name;
		$scope.picFile;
		$scope.fileadded = true; 
		$scope.add = function(){
			$scope.fileadded = false;
			Item.newItem({
				username: $scope.username, 
				name: $scope.name, 
				description: $scope.description,
				picture: $scope.picture,
				price: $scope.price,
				buylink: $scope.buylink,

			});
			
		};
		$scope.addAnother = function() {
			$scope.fileadded = true;
			$scope.name = ''; 
			$scope.description = '';
			$scope.picture = '';
			$scope.price = '';
			$scope.buylink = '';
		};
		
	})
