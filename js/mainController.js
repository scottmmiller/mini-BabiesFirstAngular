var app = angular.module('friendsList');

app.controller('mainController', function($scope) {
	$scope.friends = ['Ash', 'Luke', 'Ashlee', 'Dan', 'Laura'];

	$scope.addFriend = function () {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	};
});