app.controller('ProductDetailController', function($scope, $http, $routeParams, $location){
	$scope.showDetail = function(){
		var id = $routeParams.id;
		$http({
			method: "GET",
			url : "http://localhost:9000/fresherangular/product/get/" + id,
			data: id
		}).then(function show(response) {
			$scope.product = response.data;
		})
	}
	$scope.showDetail();
	
	$scope.back = function(path){
		$location.path(path);
	}
})