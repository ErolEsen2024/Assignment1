// Make sure none of the variables/objects/functions "leak to the global scope."
// Using Immediately Invoked Function Expression (IIFE)
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.myMessage = "";
  $scope.myInput = "";
  $scope.clickCheckIfTooMuch = function () {
    const dishes = $scope.myInput.split(',');
    if (dishes.length <= 3) {
      $scope.myMessage = "Enjoy!";
    } else {
      $scope.myMessage = "Too much!";
    }
  }
}

})();
