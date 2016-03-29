console.log('Showing some maps!!!');


// var myApp = angular.module("myApp", ["ngRoute"]);
//
// myApp.config(["$routeProvider", function($routeProvider){
//     $routeProvider.
//         when("/home", {
//             templateUrl: "/views/routes/home.html"
//             // controller: "HomeController"
//         }).
//         when("/map", {
//             templateUrl: "/views/partials/map.html"
//             // controller: "MapController"
//         }).
//         otherwise({
//             redirectTo: 'home'
//         });
// }]);
//
// myApp.controller("HomeController", ["$scope", function($scope){
//     $scope.somethingAwesome = "AWESOME THING!";
//     console.log($scope.somethingAwesome);
// }]);
//
// myApp.controller("MapController", ["$scope", "MapService", function($scope, MapService){
//

}]);

// myApp.factory("MapService", ["$http", function($http){
//     var map;
//
//     function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 44.3611312, lng: -92.8499861}, //44.3611312,-92.8499861,10.02z
//           zoom: 10
//         });
//     }
//
//     return {
//         //public
//         map : initMap
//     };
// }]);








// var map;
//
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8
//     });
// }



//
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 0, lng: 0},
//     zoom: 3,
//     styles: [{
//       featureType: 'poi',
//       stylers: [{ visibility: 'off' }]  // Turn off points of interest.
//     }, {
//       featureType: 'transit.station',
//       stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
//     }],
//     disableDoubleClickZoom: true
//   });
// }
//





// var gmAPI = new GoogleMapsAPI();
// var params = {
//   center: '444 W Main St Lock Haven PA',
//   zoom: 15,
//   size: '500x400',
//   maptype: 'roadmap',
//   markers: [
//     {
//       location: '300 W Main St Lock Haven, PA',
//       label   : 'A',
//       color   : 'green',
//       shadow  : true
//     },
//     {
//       location: '444 W Main St Lock Haven, PA',
//       icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600'
//     }
//   ],
//   style: [
//     {
//       feature: 'road',
//       element: 'all',
//       rules: {
//         hue: '0x00ff00'
//       }
//     }
//   ],
//   path: [
//     {
//       color: '0x0000ff',
//       weight: '5',
//       points: [
//         '41.139817,-77.454439',
//         '41.138621,-77.451596'
//       ]
//     }
//   ]
// };
// gmAPI.staticMap(params); // return static map URL
// gmAPI.staticMap(params, function(err, binaryImage) {
//   // fetch asynchronously the binary image
// });
