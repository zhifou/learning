const getProperties = (from, ...selectors) =>
    [...selectors].map(s =>
        s
            .replace(/\[([^\[\]]*)\]/g, ".$1.")
            .split(".")
            .filter(t => t !== "")
            .reduce((prev, cur) => prev && prev[cur], from)
    );

/************************************************/
// 测试
const obj = {
    selector: { to: { val: "val to select" } },
    target: [1, 2, { a: "test" }],
};

const result = getProperties(obj, "selector.to.val", "target[0]", "target[2].a");
console.log(result);
// ['val to select', 1, 'test']
/************************************************/
