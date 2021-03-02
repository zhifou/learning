class EventEmitter {
    constructor() {
        this.eventMap = {};
    }
    subscribe(name, cb) {
        const eventList = this.eventMap[name] || [];
        eventList.push(cb);
    }
    publish(name, ...data) {
        (this.eventMap[name] || []).forEach(cb => {
            cb(...data);
        });
    }
}

let singleton = (function (ClassObj) {
    let unique = new ClassObj();
    return function () {
        return unique;
    };
})(EventEmitter);

export default singleton();
