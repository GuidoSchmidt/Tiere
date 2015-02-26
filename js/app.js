var app = angular.module('animalApp', [
  'ngRoute',
  'ngAudio'
]);

app.config(['$routeProvider', function($routeProvide) {
  $routeProvide
    .when('/', {templateUrl: './partials/animal-overview.html', controller: 'PageCtrl'})
    .when('/animal-detail', {templateUrl: './partials/animal-detail.html', controller: 'PageCtrl'})
    .otherwise('/404', {templateUrl: '.partials/404.html',controller: 'PageCtrl'});
}]);

app.run(function ($rootScope) {
  $rootScope.currentAnimalID = 0;
});

app.controller('PageCtrl', function($scope, $location, $rootScope, $http) {
  $http({
    method: 'GET',
    url: './tiere.json',
    data: ''
  }).success(function(data, status) {
    $scope.animals = data;
  }).error(function(data, status) {
    console.log(status);
  });

  $scope.currentAnimal = $rootScope.currentAnimalID;
  $scope.audioElement = document.createElement('audio');
  $scope.videoElement = document.createElement('video');

  $scope.setCurrent = function(animal) {
    console.log(animal);
    $rootScope.currentAnimalID = animal;
  };

  $scope.$on('$locationChangeSuccess', function() {
      $rootScope.actualLocation = $location.path();
      $scope.audioElement.pause();
  });

  $scope.setCurrent = function(animal) {
    $rootScope.currentAnimalID = animal;
    $location.path('/animal-detail');
  };

  $scope.playAudio = function() {
    console.log($scope.animals[$scope.currentAnimal].audio);
    $scope.audioElement.setAttribute('src', $scope.animals[$scope.currentAnimal].audio);
    $scope.audioElement.play();
  };

  $scope.playVideo = function() {
    document.getElementById("video-frame").setAttribute("src", $scope.animals[$scope.currentAnimal].video + '&controls=0&showinfo=0');
    document.getElementById("video-frame").setAttribute("height", document.body.scrollHeight);
    document.getElementById("video").style.display = 'inline';
    document.getElementById("video").style.opacity = 1;
  };

  $scope.readText = function() {
  };

  $scope.back = function() {
    $location.path('/');
  };

  $scope.closeVideo = function() {
    document.getElementById("video").style.opacity = 0;
    document.getElementById("video").style.display = 'none';
    document.getElementById("video-frame").setAttribute("src", "");
  };
});
