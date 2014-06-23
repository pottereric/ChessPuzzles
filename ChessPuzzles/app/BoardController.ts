/// <reference path="board.ts" />

var chessPuzzlesApp = angular.module('chessPuzzlesApp', []);

chessPuzzlesApp.controller('BoardCtrl', function ($scope) {

    var _board = new ChessPuzzles.Board();

    $scope.rows = _board.rows;
}); 