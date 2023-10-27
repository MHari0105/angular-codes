var Sample = /** @class */ (function () {
    function Sample() {
        var _this = this;
        this.x = 5;
        this.draw = function () {
            console.log(_this.x + _this.y);
        };
    }
    return Sample;
}());
var circle = new Sample();
circle.y = 7;
circle.draw();
