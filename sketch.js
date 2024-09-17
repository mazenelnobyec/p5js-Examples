function setup() {
  createCanvas(400, 400);
}

let x=0;
function draw() {
  background(220);
  fill(0)
  if (x>=width) {
    x=0
  }
  circle(width/2,height/2,x+=2,20)
}
