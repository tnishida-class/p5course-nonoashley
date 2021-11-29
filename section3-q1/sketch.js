// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 50;
}

function draw(){
  background(160, 192, 255);  count = (count + 1) % cycle;
    if(count<30){
      ellipse(width / 2, height / 2, count+20); }
    if(count>30){
      ellipse(width / 2, height / 2, 120-2*count);}

  if(keyIsPressed){
    count = (count + 1) % cycle;
    if(count<15){
          ellipse(width / 2, height / 2, 2*count+20); }
          if(count>15){
            ellipse(width / 2, height / 2, 120-2*count)
          }
}
}
