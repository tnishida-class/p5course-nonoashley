// 最終課題を制作しよう

let balls;
let timer = 180
let Fish;


function setup(){
  createCanvas(700, 400);
  balls = [];
}

function draw(){
  background(160, 192, 255);

  for(let i = 0; i < balls.length ; i = i + 10){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

const b = { x: mouseX + 20, y: mouseY , size: random(15) + 10, vx: random(-2,2) , vy: random(-7,-1) };
    balls.push(b);

  drawFish( mouseX , mouseY, 50);

  drawTimer();

}


function drawFish(ox, oy, r) {
  push();
  translate(ox, oy);
  fill(31, 73, 125);
  strokeWeight(1);
  stroke(31, 73, 125);
  beginShape();
  for (let theta = 0; theta < 360; theta++) {
    let x = r * cos(theta) - r * pow(sin(theta), 2) / sqrt(2) ;
    let y = r * cos(theta) * sin(theta);

  if ((mouseX-pmouseX) >= 0){vertex(0.5 * x, 0.5 * y)};
    if ((mouseX-pmouseX) < 0){vertex(-0.5 * x, 0.5 * y)};

  }
  endShape(CLOSE);
  pop();
}

function drawTimer() {

  textAlign(600, TOP);
  textSize(20);
  text(timer, 630, 30);

  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
  quad(260,240,440,240,420,399,280,399);
  text("CUP NOOODLE", 275, height*0.7);

  }
}
