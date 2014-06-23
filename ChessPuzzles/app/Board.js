﻿var ChessPuzzles;
(function (ChessPuzzles) {
    var Board = (function () {
        function Board() {
            this.rows = [
                ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah'],
                ['ba', 'bb', 'bc', 'bd', 'be', 'bf', 'bg', 'bh'],
                ['ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'cg', 'ch'],
                ['da', 'db', 'dc', 'dd', 'de', 'df', 'dg', 'dh'],
                ['ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'eg', 'eh'],
                ['fa', 'fb', 'fc', 'fd', 'fe', 'ff', 'fg', 'fh'],
                ['ga', 'gb', 'gc', 'gd', 'ge', 'gf', 'gg', 'gh'],
                ['ha', 'hb', 'hc', 'hd', 'he', 'hf', 'hg', 'hh']
            ];
        }
        return Board;
    })();
    ChessPuzzles.Board = Board;
})(ChessPuzzles || (ChessPuzzles = {}));
//# sourceMappingURL=Board.js.map
