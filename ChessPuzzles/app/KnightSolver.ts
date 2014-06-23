/// <reference path="board.ts" />

module ChessPuzzles {
    export class KnightSolver {
        constructor(private board: ChessPuzzles.Board, private x: number, private y: number) {
            board[x][y] = 'test';
        }
    }
}