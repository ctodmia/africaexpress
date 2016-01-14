angular.module('africaXpress')
	.controller('SellController', function($scope, Upload, $timeout, NewItem){
		console.log('this is the sell controller')
		$scope.displayPic;
		$scope.name;
		$scope.picFile;
		$scope.add = function(){
			console.log('we hitit', $scope.name)
			console.log('this is file html5', $scope.file)
			NewItem.getItem({
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

	//on the sell view we want 
		//collect the name of the seller
		//item picture,
		//item name, 
		//item price, 

