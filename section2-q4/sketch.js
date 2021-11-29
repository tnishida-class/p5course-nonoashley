// ギリシャ国旗
function setup() {
  const blue = color(29, 94, 174);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if( i % 2 == 0 ){
      fill(blue)
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, d);
  }

  fill(blue);
  let size = d * 5;
  rect( 0 , 0 , size , size );

  fill(255);
  rect( d*2 , 0 , d , size)
  rect( 0 , d*2 , size , d )
}
}
