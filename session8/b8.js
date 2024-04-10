var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function combineObjects(obj1, obj2) {
    if (!obj1 || !obj2) {
        console.log("Invalid input: objects cannot be null or undefined.");
        return {};
    }
    var combinedObject = __assign(__assign({}, obj1), obj2);
    return combinedObject;
}
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
var combined = combineObjects(obj1, obj2);
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }
var invalidCombined = combineObjects(null, obj2);
console.log(invalidCombined); // {}
