(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.lunchMenuList = '';
	$scope.message=""
	$scope.checkIfTooMuch = function(lunchMenuList){
		if($scope.lunchMenuList === ''){
			$scope.message="Please enter data first";
		}else if($scope.lunchMenuList.split(',').length <= 3){
			$scope.message="Enjoy!";
		}else{
			$scope.message="Too much!";
		}
	}
}

})();