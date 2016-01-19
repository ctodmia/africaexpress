angular.module('africaXpress')
	.controller('SellController', function($scope, Upload, $timeout, Item){
		console.log('this is the sell controller')
		$scope.displayPic;
		$scope.name;
		$scope.picFile;
		$scope.add = function(){
			console.log('we hitit', $scope.name)
			console.log('this is file html5', $scope.file)
			Item.newItem({
				username: $scope.username, 
				name: $scope.name, 
				description: $scope.description,
				picture: $scope.picture,
				price: $scope.price,
				buylink: $scope.buylink,

			});
			$scope.name = ''; 
			$scope.description = '';
			$scope.picture = '';
			$scope.price = '';
			$scope.buylink = '';
		}
		
	})
