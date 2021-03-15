class Polygon {
    constructor(polySidesArr) {
        this.polySidesArr= polySidesArr;
    }

    perimeter() {
        return this.polySidesArr.reduce((acc,init)=>acc+init)
    }
}

let triangle = new Polygon([10, 20, 10, 20]);
console.log(triangle.perimeter());
