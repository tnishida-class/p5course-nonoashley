// 小手調べ
function setup(){
  createCanvas(100,100);
  background(255);
  for(let x = 10; x < 100; x = x + 10){
    noFill();
    stroke(0, 0, 255);
    ellipse (50, 50, x)
  }
 for(let x = 50; x < 100; x = x + 10){
   noFill();
   stroke(255, 0, 0);
   ellipse (50, 50, x)
 }
}

// 小手調べ/数字版
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    noFill();
    createCanvas(100,100);
      background(255);
    stroke(0, 0, 255);
    ellipse (50, 50, 10)
    ellipse (50, 50, 20)
    ellipse (50, 50, 30)
    ellipse (50, 50, 40)
    ellipse (50, 50, 50)
    stroke(255, 0, 0);
    ellipse (50, 50, 60)
    ellipse (50, 50, 70)
    ellipse (50, 50, 80)
    ellipse (50, 50, 90)
    ellipse (50, 50, 100)
}
}
