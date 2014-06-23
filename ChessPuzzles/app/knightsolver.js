/// <reference path="board.ts" />
var ChessPuzzles;
(function (ChessPuzzles) {
    var KnightSolver = (function () {
        function KnightSolver(board, x, y) {
            this.board = board;
            this.x = x;
            this.y = y;
            board[x][y] = 'test';
        }
        return KnightSolver;
    })();
    ChessPuzzles.KnightSolver = KnightSolver;
})(ChessPuzzles || (ChessPuzzles = {}));
//# sourceMappingURL=KnightSolver.js.map
