/**
 * 创建一个UUID字符串
 * @returns UUID字符串
 */
var createUUID = function() {
    var d = new Date().getTime();
	if (window.performance && typeof window.performance.now === "function") {
		d += performance.now(); //use high-precision timer if available
	}
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
	return uuid;
};


/************************************************/
// 测试

var B = createUUID();
console.log('a new uuid created: ', B);
/************************************************/