var compact = function (xs) {
    return xs.filter(function (x) {
        return x !== null && x !== undefined;
    })
};

var Arr = [1, '2', null, 3, 5, undefined, '6'];

console.log(compact(Arr));