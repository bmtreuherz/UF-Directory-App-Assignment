angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {};
    $scope.currentDetail = {};
    $scope.var = $scope.listings.length;
    $scope.showDets = true;

    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = {};
      $scope.showDets = true;
    };

    $scope.clearForm = function(){
      $scope.showDets = true;
      $scope.newListing = {};
    }

    // I am passing in the object rather than the index because when a filter is
    // applied the index in ng-repeat will not match the index in listings.
    $scope.deleteListing = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.currentDetail = $scope.listings[index];
    };
  }
]);
