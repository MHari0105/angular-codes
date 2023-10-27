var ConstructorDemo = /** @class */ (function () {
    function ConstructorDemo(n, m) {
        this.m = m;
        this.n = n;
        console.log(m + n);
    }
    return ConstructorDemo;
}());
new ConstructorDemo(2, 4);
