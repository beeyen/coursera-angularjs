(function () {
'use strict';

var toBuyList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Sweetarts",
    quantity: "25"
  },
  {
    name: "Orange Juice",
    quantity: "1"
  }
];

var boughtList = [];

angular.module('ShoppingListApp', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyShoppingController
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getToBuyItems();

  list1.itemBought = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

  list1.isEmpty = function () {
    if (list1.items.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

// AlreadyBoughtShoppingController
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getBoughtItems();

  list2.isEmpty = function () {
    if (list2.items.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

// ShoppingListCheckOffService
function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = toBuyList;
  // List of bought items
  var boughtItems = boughtList;

  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
