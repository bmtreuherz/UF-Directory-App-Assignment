angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {};
    $scope.currentDetail = {};

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = {};
    };
    $scope.deleteListing = function(index) {
      console.log("Delete");
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      console.log("Details");
      $scope.currentDetail = $scope.listings[index];
    };
  }
]);
