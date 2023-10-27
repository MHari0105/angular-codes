class ConstructorDemo {
    n: number;
    m: number;

    constructor(n: number, m: number) {
        this.m = m;
        this.n = n;
        console.log(m + n);
    }
}


new ConstructorDemo(2, 4);