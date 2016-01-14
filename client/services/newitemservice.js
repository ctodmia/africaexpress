angular.module('africaXpress')

	.factory('NewItem', ['$http', '$q', function($http, $q){

		var obj = {

		}
		//grabs the username of the person that wants to chat. 
		// obj.initChat = function(user){
		// 	return $http.get('/initChat', user)
		// }

		obj.getItem = function(item) {
			console.log('thiis is item', item)
			
			 return $http.post('/newitem', item)
			
		};

		return obj;
	}])
