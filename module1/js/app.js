(function() {
    'use strict';
    //define angular module
    angular.module('lunchChecker', [])
    .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope','$filter'];

    function LunchCheckerController($scope, $filter) {
        $scope.menu = '';
        $scope.message = '';
        $scope.status = '';
        $scope.emptyItem = false;

        $scope.checkMenu = function() {
          var total = menuProcessor ($scope.menu);
          if (total == 0) {
            $scope.message = 'Please enter data first!';
            $scope.status = 'danger';
          } else if (total > 3) {
            $scope.message = 'Too much!';
            $scope.status = 'success';
          } else {
            $scope.message = 'Enjoy!';
            $scope.status = 'success';
          }
        };
        // function to process the lunch string
        function menuProcessor(string) {
          var total = 0;
          $scope.emptyItem = false;
          if (string === "") {
            return 0;
          } else {
            var menuArray = string.split (',');
            for (var i = 0; i < menuArray.length; i++) {
              // trim the string before checking its length
              // if length === 0 it's an empty item
              if (menuArray[i].trim().length > 0) {
                total += 1;
              } else {
                $scope.emptyItem = true;
              }
            }
            return  total;
          }
        }
    }

})();
