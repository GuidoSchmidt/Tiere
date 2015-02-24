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

app.controller('PageCtrl', function($scope, $location, $rootScope) {
  console.log("Page controller initialized");
  $scope.animals = [
    {
      name: 'Der Papagei',
      image: 'http://www.natur-beobachtungen.de/files/vogelpark-walsrode/papagei2.jpg',
      video: 'http://www.youtube.com/embed/cvNKMxJsZRs?end=80&autoplay=1',
      audio: './audio/parrot.mp3',
      description: '\nPapageien gibt es in unterschiedlichen Größen und Farben. Es gibt zum Beispiel Vögel mit grünen, gelben oder bunten Federn. Die größten unter ihnen messen vom Kopf bis zur Schwanzspitze 85 cm und sind somit etwa so groß wie ein einjähriges Kind.\nDie meisten Papageiensind Waldbewohner. Sie leben in den Baumkronen, wo sie ihren Schnabel geschickt als Kletterhilfe benutzen. Der Schnabel ist ihr wichtigstes Werkzeug und dient als Hilfe beim Klettern sowie beim Öffnen und Festhalten von Nüssen und Samen.\nMeist leben sie in größeren Schwärmen, ziehen auf der Suche nach Nahrung durch die Baumkronen des Regenwaldes und übernachten gemeinsam in den Bäumen.\nSie geben kreischende Rufe von sich und sind bekannt dafür, dass sie Laute aus ihrer Umgebung und sogar Wörter der menschlichen Sprache nachahmen können.'
    },
    {
      name: 'Der Löwe',
      image: 'http://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
      video: 'http://www.youtube.com/embed/sRgnVdOvIaA?start=17&end=100&autoplay=1',
      audio: './audio/lion.mp3',
      description: '\nDer Löwe gehört zur Art der Katzen und lebt in Rudeln. Die männlichen Löwen erkennt man an ihrer gewaltigen Mähne und ihrem lauten Gebrüll. Weibliche Löwen haben keine Mähne.\nDas Fell ist gelblich braun bis rötlich oder dunkelbraun gefärbt, am Bauch ist es etwas heller. Die Mähne kann schwarzbraun bis rotbraun, aber auch gelblich braun sein.\nLöwen sind gemütliche Tiere. Wenn sie nicht gerade jagen, dann dösen sie bis zu 20 Stunden pro Tag. Sie können sehr schnell laufen, halten dies jedoch nicht lange durch. Deshalb jagen Löwen in Rudeln und pirschen sich an ihre Beute heran und greifen diese aus verschiedenen Richtungen an.\nMit ihrem lauten Gebrüll verschaffen sich die Tiere Respekt, ansonsten geben sie brummende und knurrende Laute von sich.'
    },
    {
      name: 'Der Gorilla',
      image: 'http://eofdreams.com/data_images/dreams/gorilla/gorilla-05.jpg',
      video: 'http://www.youtube.com/embed/CyKMMAxMybY?start=12&end=100&autoplay=1',
      audio: './audio/gorilla.mp3',
      description: '\nAffen sind uns Menschen von allen Tieren am ähnlichsten, besonders die Familie der Menschenaffen. Dazu gehört der Gorilla.\n Er lebt hauptsächlich auf dem Waldboden und ernährt sich von Früchten, Blättern und Wurzeln. Er hat ein schwarzgraues Fell und einen breiten Körperbau. Wenn er steht, ist er etwa so groß wie ein Mensch. Seine Arme sind länger als seine Beine, sodass er bequem auf allen Vieren laufen kann. Deshalb bewegen sich Gorillas nur selten auf zwei Beinen fort.\nSie sind aber gute Kletterer und klettern manchmal auch zum Schlafen auf Bäume. Zur Begrüßung trommeln sie sich gerne mit den Händen auf die eigene Brust.'
    }
  ];

  $scope.currentAnimal = $rootScope.currentAnimalID;
  $scope.audioElement = document.createElement('audio');
  $scope.videoElement = document.createElement('video');

  $scope.setCurrent = function(animal) {
    console.log(animal);
    $rootScope.currentAnimalID = animal;
    //$location.path('/animal-detail');
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
    document.getElementById("video-frame").setAttribute("src", $scope.animals[$scope.currentAnimal].video);
    document.getElementById("video-frame").setAttribute("height", $('.video').width() * 9.0/16.0);
    //$scope.videoElement.setAttribute('src', $scope.animals[$scope.currentAnimal].video);
  };

  $scope.readText = function() {
  };

  $scope.back = function() {
    $location.path('/');
  };
});
