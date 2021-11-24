// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(26,51,153);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 200/3;
    let y = 100 + sin(theta) * 200/3;
    star(x, y, 100/9);
  }
function star(cx, cy, r){
beginShape();
for(var i = 0; i < 5; i++){
  let theta = TWO_PI * i * 2 / 5 - HALF_PI;
  let x = cx + cos(theta) * r;
  let y = cy + sin(theta) * r;
  vertex(x,y);
}
fill(252,203,1);
noStroke();
endShape(CLOSE);
}
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
