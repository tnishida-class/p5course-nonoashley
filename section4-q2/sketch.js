// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);
  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]
  console.log(total)

   // BLANK[1]

if( i == 0 ){
  arc(200,200,350,350, -HALF_PI , (scores[i] * Math.PI / 20 / total), PIE)
}
if( i > 0 ){
  arc(200,200,350,350, -HALF_PI , (scores[i] * Math.PI / 20 / total), PIE );

  }
}
}
//どうすれば前の地点から角度を出せるのかがわからない
