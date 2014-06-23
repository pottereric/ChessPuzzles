var chessPuzzlesApp = angular.module('chessPuzzlesApp', []);

chessPuzzlesApp.controller('BoardCtrl', function ($scope) {

    var _rows: string[][] =
        [
            ['11', '2', '3', '5'],
            ['12', '2', '3', '5'],
            ['13', '2', '3', '5'],
            ['14', '2', '3', '5']
        ];

    $scope.rows = _rows;
}); 