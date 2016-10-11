(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath',"http://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  var promise = MenuSearchService.getMenuItems();
  menu.items = [];
  menu.foundItems = [];
  promise.then(function (response) {
      var data = response.data;
      menu.items = data['menu_items'];
  }).catch(function(error) {
    console.log('something went wrong');
  });
  menu.removeItem = function(index) {
    menu.foundItems.splice(index, 1);
  }
  menu.narrowItDown = function() {
    menu.foundItems = [];
    if (!menu.searchTerm || menu.searchTerm === '') {
      return;
    } else {
      for (var i=0; i < menu.items.length ; i++ ) {
        var item = menu.items[i];
        if (item.description.indexOf(menu.searchTerm) >= 0) {
          menu.foundItems.push(item);
        }
      }
    }
  }
};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function(searchTerm) {
    if (searchTerm === '') {
      return null;
    } else {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
    }
    return response;
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      term: '<',
      itemsFound: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.itemNotFound = function () {
    if (list.itemsFound.length === 0) {
      return true;
    }
    return false;
  };
}

})();
