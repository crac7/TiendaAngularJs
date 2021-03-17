// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})


var app = angular.module('starter', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('detail', {
      url: "/detail",
      templateUrl: "detail.html",
      controller: "detailCtrl"
    })
    /* .state('kitchen', {
      url: "/kitchen",
      templateUrl: "kitchen.html",
      controller: "kitchenCtrl"
    })
    .state('den', {
      url: "/denCtrl",
      templateUrl: "den.html",
      controller: "denCtrl"
    })
    .state('itemDetail', {
      url: "/items/:itemName",
      templateUrl: "item.html",
      controller: "itemDetailCtrl"
    }) */

}])
.controller('detailCtrl', ['$scope', function($scope) {}])

const bodyGetProdcutos = {
  "transaccion": "generico",
  "tipo": "4"
 }
 

angular.module('starter', [])
.controller('productos', function($scope, $http) {
    $http.post('https://rolimapp.com:3000/productos', bodyGetProdcutos).
        then(function(response) {
          /* const { data :{data}}=response */
          console.log(response.data.data);
            $scope.productos = response.data.data;
            $scope.img = 'http://localhost:8100/img/'
        });
});

