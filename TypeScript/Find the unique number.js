"use strict";
exports.__esModule = true;
exports.findUniq = void 0;
function findUniq(arr) {
    var res = arr.filter(function (v) {
        return arr.indexOf(v) == arr.lastIndexOf(v);
    });
    return res[0];
}
exports.findUniq = findUniq;
console.log(findUniq([0, 0, 0.55, 0, 0]));
