/**
 * 扩展Object对象的克隆方法
 * @param 待克隆的对象
 * @returns 新的对象
 */
var clone = function(obj) {
    //判断是对象，就进行循环复制
    if (typeof obj === 'object' && typeof obj !== 'null') {
        // 区分是数组还是对象，创建空的数组或对象
        var o = Object.prototype.toString.call(obj).slice(8, -1) === "Array" ? [] : {};
        for (var k in obj) {
            // 如果属性对应的值为对象，则递归复制
            if (typeof obj === 'object' && typeof obj !== 'null') {
                o[k] = clone(obj[k]);
            } else {
                o[k] = obj[k];
            }
        }
    } else { //不为对象，直接把值返回
        return obj;
    }
    return o;
};


/************************************************/
// 测试
var A = {
    a: 123,
    b: 'abc',
    c: {
        a: 123,
        b: 'abc'
    },
    d: function() {
        console.log('this is d');
    }
}

var B = clone(A);
console.log('deepclone new object: ', B);
/************************************************/