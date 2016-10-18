(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['data'];
function ItemsController(data) {
  var categoryItems = this;
  categoryItems.items = [];
  if (data.data && data.data.menu_items) {
    categoryItems.items = data.data.menu_items;
  }
}

})();
