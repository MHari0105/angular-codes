var GetterSetter = /** @class */ (function () {
    function GetterSetter(x, y) {
        this.x = x;
    }
    Object.defineProperty(GetterSetter.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return GetterSetter;
}());
var ans = new GetterSetter(1);
ans.X = 3;
console.log('x : ', ans.X);
