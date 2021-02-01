
export const oProm = new Promise((resolve, reject) => {
    resolve(100);
});

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };
  getX() {
    return this.x;
  }
}

export let oPoint = new Point(1, 2);

export const isHas = [1,2,3].includes(2);
