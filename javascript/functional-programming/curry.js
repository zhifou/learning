var add = function (x) {
    return function (y) {
        return x + y;
    };
};

var increment = add(1);
var addTen = add(10);

console.log(increment);
console.log(addTen);

var res = increment(2);
var res1 = addTen(2);

console.log(res);
console.log(res1);