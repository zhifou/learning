/**
 * 获取URL上的query参数
 * @param {*} url 
 * @returns 
 */
const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => (
            (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
        ),
        {}
    );

/************************************************/
// 测试
console.log(getURLParameters('google.com')); // {}
console.log(getURLParameters('http://url.com/page?name=Adam&surname=Smith'));
// {name: 'Adam', surname: 'Smith'}
/************************************************/