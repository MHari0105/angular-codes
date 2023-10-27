class GetterSetter {
    private x: number;

    constructor(x: number, y?: number) {
        this.x = x;
    }

    get X() {
        return this.x;
    }

    set X(value) {
        this.x = value;
    }
}

let ans = new GetterSetter(1);
ans.X = 3;
console.log('x : ', ans.X);