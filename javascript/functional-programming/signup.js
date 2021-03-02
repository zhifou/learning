var signUp = function (Db, Email, attrs) {
    return function () {
        var user = saveUser(Db, attrs);
        welcomeUser(Email, attrs);
    }
};

var saveUser = function (Db, attrs) {
    console.log(this, 123);
};

var welcomeUser = function (Email, attrs) {
    console.log(456);
};

var sign = new signUp('ddd', 'ddddd', '3333');
sign();