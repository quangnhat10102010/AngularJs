app.controller('MainStoreController', function($scope, $http, $location){
	$scope.getAllProducts = function() {
		$scope.showProductList = true;
		$http({
	        method : "POST",
	        url : "http://localhost:9000/fresherangular/product/list"
	    }).then(function mySuccess(response) {
	        $scope.products = response.data;
	    }, function myError(response) {
	        alert(response.statusText);
	    });
	}
	
	$scope.submitForm = function() {
		$http({
	        method : "POST",
	        url : "http://localhost:9000/fresherangular/product/add",
	        data : $scope.product,
	        contentType: "application/json"
	    }).then(function mySuccess(data) {
	    	alert("Added product successfully.");
	    	$scope.getAllProducts();
	    }, function myError(response) {
	        alert(response.statusText);
	    });
	}
	
	$scope.plus = function(item)
	{
		var id = item.id;
		$http({
	        method : "POST",
	        url : "http://localhost:9000/fresherangular/product/increase/" + id,
	    }).then(function mySuccess(response) {
	    	angular.forEach($scope.products, function(product, index){
	    		if(response.data.id == product.id) {
	    			product.available = response.data.available;
	    		}
	    	})
	    }, function myError(response) {
	        alert(response.statusText);
	    });
	}
	
	$scope.minus = function(item)
	{
		var id = item.id;
		$http({
	        method : "POST",
	        url : "http://localhost:9000/fresherangular/product/decrease/" + id,
	    }).then(function mySuccess(response) {
	    	angular.forEach($scope.products, function(product, index){
	    		if(response.data.id == product.id) {
	    			product.available = response.data.available;
	    		}
	    	})
	    }, function myError(response) {
	        alert(response.statusText);
	    });
	}
	
	$scope.remove = function(item)
	{
		var id = item.id;
		$http({
	        method : "POST",
	        url : "http://localhost:9000/fresherangular/product/remove/" + id,
	    }).then(function mySuccess(response) {
	    	alert("Remove Product Successfully");
	    	$scope.getAllProducts();
	    }, function myError(response) {
	        alert(response.statusText);
	    });
	}
});

app.directive("searchProducts", function() {
	return {
		restrict: "E",
		templateUrl: "/fresherangular/views/store/searchproducts.html"
	};
});
