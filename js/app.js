var currentAnimal;
var app = angular.module('animalApp', ['ngRoute', 'ngAudio'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/animal-overview.html',
        controller: 'animalOverviewController'
      })
      .when('/animal-detail', {
        templateUrl: '/partials/animal-detail.html',
        controller: 'animalOverviewController'
      });
  });

app.run(function ($rootScope) {
  $rootScope.currentAnimalID = 0;
});

app.controller('animalOverviewController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    $scope.currentAnimal = $rootScope.currentAnimalID;
    $scope.audioElement = document.createElement('audio');
    $scope.animals = [
      {
        name: 'Der Papagei',
        image: 'http://www.natur-beobachtungen.de/files/vogelpark-walsrode/papagei2.jpg',
        video: '',
        audio: 'http://localhost:8080/audio/parrot.mp3',
        description: 'Papageien gibt es in unterschiedlichen Größen und Farben. Es gibt zum Beispiel Vögel mit grünen, gelben oder bunten Federn. Die größten unter ihnen messen vom Kopf bis zur Schwanzspitze 85 cm und sind somit etwa so groß wie ein einjähriges Kind.Die meisten Papageiensind Waldbewohner. Sie leben in den Baumkronen, wo sie ihren Schnabel geschickt als Kletterhilfe benutzen. Der Schnabel ist ihr wichtigstes Werkzeug und dient als Hilfe beim Klettern sowie beim Öffnen und Festhalten von Nüssen und Samen. Meist leben sie in größeren Schwärmen, ziehen auf der Suche nach Nahrung durch die Baumkronen des Regenwaldes und übernachten gemeinsam in den Bäumen.Sie geben kreischende Rufe von sich und sind bekannt dafür, dass sie Laute aus ihrer Umgebung und sogar Wörter der menschlichen Sprache nachahmen können.'
      },
      {
        name: 'Der Löwe',
        image: 'http://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
        video: '',
        audio: 'http://localhost:8080/audio/lion.mp3',
        description: ''
      },
      {
        name: 'Der Gorilla',
        image: 'http://eofdreams.com/data_images/dreams/gorilla/gorilla-05.jpg',
        video: '',
        audio: 'http://localhost:8080/audio/gorilla.mp3',
        description: 'Affen sind uns Menschen von allen Tieren am ähnlichsten, besonders die Familie der Menschenaffen. Dazu gehört der Gorilla. Er lebt hauptsächlich auf dem Waldboden und ernährt sich von Früchten, Blättern und Wurzeln. Er hat ein schwarzgraues Fell und einen breiten Körperbau. Wenn er steht, ist er etwa so groß wie ein Mensch. Seine Arme sind länger als seine Beine, sodass er bequem auf allen Vieren laufen kann. Deshalb bewegen sich Gorillas nur selten auf zwei Beinen fort. Sie sind aber gute Kletterer und klettern manchmal auch zum Schlafen auf Bäume. Zur Begrüßung trommeln sie sich gerne mit den Händen auf die eigene Brust.'
      }
    ];


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
      console.log($scope.animals[$scope.currentAnimal].video);
    };
  }]);