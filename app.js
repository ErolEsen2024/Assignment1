// Make sure none of the variables/objects/functions "leak to the global scope."
// Using Immediately Invoked Function Expression (IIFE)
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.myMessage = "";

  $scope.clickCheckIfTooMuch = function () {
    $scope.myMessage = "Hello, World!";
  }
}

})();
