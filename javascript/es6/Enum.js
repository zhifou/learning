class Enum {
    constructor(...keys) {
        console.log(keys)
        keys.forEach((key, i) => {
            this[key] = i;
        });
        Object.freeze(this);
    }

    *[Symbol.iterator]() {
        for (let key of Object.keys(this)) yield key;
    }
}

/************************************************/
// 测试
// const daysEnum = new Enum(
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//     "sunday"
// );

const daysEnum = new Enum({
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
});

const days = [...daysEnum]; // Array of the enum values as strings
console.log(days);
console.log(daysEnum.monday);
/************************************************/
