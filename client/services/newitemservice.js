angular.module('africaXpress')

	.factory('Item', ['$http', '$q', function($http, $q){

		var obj = {

		}
		//grabs the username of the person that wants to chat. 
		// obj.initChat = function(user){
		// 	return $http.get('/initChat', user)
		// }

		obj.newItem = function(item) {
			 return $http.post('/newitem', item)
			
		};

		obj.getAll = function() {
			return $http.get('/allitems').success(function(data){
				console.log(data)
				return data;
			})
		}

		return obj;
	}])
