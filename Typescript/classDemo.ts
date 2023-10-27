class Sample {
    private x: number = 5;
    public y: number;

    draw = (): any => {
        console.log(this.x + this.y);
    }

    drawCircle: () => {
        draw();
    }
}

let circle = new Sample();
circle.y = 7;
circle.draw();
