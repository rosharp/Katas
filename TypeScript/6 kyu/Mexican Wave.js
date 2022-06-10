"use strict";
exports.__esModule = true;
exports.wave = void 0;
function wave(str) {
    var res = [];
    var _loop_1 = function (i) {
        if (str[i] == ' ')
            return "continue";
        res.push(Array.from(str, function (c, j) { return i === j ? c.toUpperCase() : c; }).join(''));
    };
    for (var i = 0; i < str.length; i++) {
        _loop_1(i);
    }
    return res;
}
exports.wave = wave;
console.log(wave("hello"));
