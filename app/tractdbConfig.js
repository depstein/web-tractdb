---
---
var module_tractdbConfig = angular.module('tractdb.config', []);

module_tractdbConfig.constant(
    'BASEURL_PYRAMID',
    '{{ site.tractdb.baseurl_pyramid }}'
);

module_tractdbConfig.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);

module_tractdbConfig.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);
