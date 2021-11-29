// チェッカー
function setup() {
 createCanvas(200, 200);
 let size = width / 0;
  noStroke();
 for(let i = 0 ; i < 8; i++){
   for(let j = 0 ; j < 8; j++){
     fill((i + j) % 2 == 1 ? 128 : 255);
     console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
     rect(i * 25, j * 25, 25, 25);
}

 for(let k = 0.5 ; k < 8 ; k++){
  for(let l = 0.5 ; l < 8 ; l++){
    if((k + l) % 2 == 0){
       if(l<3)fill(255,0,0)
       if(l>5)fill(0)
    }
    else{
        noFill()
      }
    console.log(k, l);
    ellipse( k * 25 , l * 25 , 20 )
  }
}
}
}
