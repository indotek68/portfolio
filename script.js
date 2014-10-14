angular.module('myPortfolio', ['ui.bootstrap'])
	.controller('Ctrl', ['$scope', function($scope){
		$scope.templates = 
			[{
				name: 'aboutMe',
				url: 'partials/_about-me.html'
			},
			{ 
				name: 'resume',
				url: 'partials/_resume.html'
			},
			{
				name: 'webDev',
				url: 'partials/_web-dev.html'
			},
			{
				name: 'ux',
				url: 'partials/_ux.html'
			},
			{
				name: 'architecture',
				url: 'partials/_architecture.html'
			},
			{
				name: 'sketch',
				url: 'partials/_sketch.html'
			}];
		
		$scope.template = $scope.templates[2];

		$scope.getTemplate = function(temp){
			// console.log("hello")
			for (var i = 0; i < $scope.templates.length; i++) {
				if($scope.templates[i]["name"] === temp){
					$scope.template = $scope.templates[i]
				}
			};
		}

}]);
