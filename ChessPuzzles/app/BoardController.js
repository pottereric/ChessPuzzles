/// <reference path="board.ts" />
/// <reference path="knightsolver.ts" />
var chessPuzzlesApp = angular.module('chessPuzzlesApp', []);

chessPuzzlesApp.controller('BoardCtrl', function ($scope) {
    var _board = new ChessPuzzles.Board();
    var _solver = new ChessPuzzles.KnightSolver(_board, 2, 2);

    $scope.rows = _board.rows;
});
//# sourceMappingURL=BoardController.js.map
