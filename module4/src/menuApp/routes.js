(function () {

//angular.module('PandaExpress', ['ui.router']);

angular.module('MenuApp')
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com")
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'src/menuApp/home.html'
    })
    // categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuApp/templates/main-categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
        }]
      }
    })
    // Item detail
    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'src/menuApp/templates/main-items.template.html',
      controller: 'ItemsController as items',
      params: {
        shortName: null
      },
      resolve: {
        data: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    });
}


})();
