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


		$scope.upload = function (dataUrl) {
        Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: {
                file: Upload.dataUrltoBlob(dataUrl)
            },
        }).then(function (response) {
            $timeout(function () {
                $scope.result = response.data;
            });
        }, function (response) {
            if (response.status > 0) $scope.errorMsg = response.status 
                + ': ' + response.data;
        }, function (evt) {
            $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
        });
    }
		
	})

	//on the sell view we want 
		//collect the name of the seller
		//item picture,
		//item name, 
		//item price, 

