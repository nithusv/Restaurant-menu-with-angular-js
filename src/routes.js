(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
 .state('categories', {
   url: '/categories',
   templateUrl: 'src/templates/main-category.template.html',
   controller: 'categoriesController as categoryCtrl',
   resolve: {
     allcat: ['MenuDataService', function (MenuDataService) {
       return MenuDataService.getAllCategories();
     }]
   }
 })

 .state('items', {
   url: '/items/{itemId}',
   templateUrl: 'src/templates/main-items.template.html',
   controller: 'itemsController as itctrl',
   resolve: {
     catitems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
       return MenuDataService.getItemsForCategory($stateParams.itemId);
     }]
   }
 });
 }
})();
