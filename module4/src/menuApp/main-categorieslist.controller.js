(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var categories = this;
  categories.items = [];
  if (items.data) {
    categories.items = items.data;
  }
}

})();
