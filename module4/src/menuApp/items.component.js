(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/menuApp/templates/itemsList.template.html',
  bindings: {
    items: '<'
  }
});

})();
