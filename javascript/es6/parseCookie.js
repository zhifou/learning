const parseCookie = str =>
    str
        .split(";")
        .map(v => v.split("="))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
                v[1].trim()
            );
            return acc;
        }, {});

/************************************************/
// 测试
const result = parseCookie("foo=bar; equation=E%3Dmc%5E2");
console.log(result);
// { foo: 'bar', equation: 'E=mc^2' }
/************************************************/