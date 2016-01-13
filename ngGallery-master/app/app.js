var app = angular.module('SellIt', ['ngRoute', 'ngFileUpload'])

.controller('ItemController', ['$scope', 'Upload','$timeout', function($scope,  Upload, $timeout){
	$scope.items = [
		{
			'name': 'Chanel Purse',
			'description': 'The perfect useless expensive bag',
			'price': '$2000',
			'location': 'Berkely,Ca',
			'image': '',
			
		}
	];

	$scope.addItem = function(file){
		$scope.items.push({'name':$scope.newItem, 'description':$scope.newDescription, 'price':$scope.newPrice, 'location':$scope.location, 'image':$scope.picFile})
		$scope.newItem =''
		$scope.newDescription =''
		$scope.newPrice =''
		$scope.newLocation =''
		// $scope.picFile= ''
	}

	$scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
      data: {file: file, username: $scope.username},
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      	
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }


}]);
