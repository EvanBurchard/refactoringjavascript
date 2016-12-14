class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

class Polygon2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

//no scope, this is the above context

function (val){
  this.d = val;
}

console.log(this);
