angular.module('camerXpress')
	.controller('SellController', function($scope, Upload, $timeout){
		console.log('this is the sell controller')

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

