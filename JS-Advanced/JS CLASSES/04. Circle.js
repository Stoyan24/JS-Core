class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }
    set diameter(diamter){
        this.radius = diamter / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}