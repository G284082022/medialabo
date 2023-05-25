// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let kaito = document.querySelector('button#kaito');
kaito.addEventListener('click', hantei);


//テキストボックスの値は文字列型なので，整数に変換する


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  let i = document.querySelector('input[name="seisu"]');
  let seisu = i.value;       // ユーザが記入した文字列
  let yoso = seisu

  

  let p2a = document.querySelector('span#kaisu');		
  p2a.textContent = (kaisu);	
  let p2b = document.querySelector('span#answer');		
  p2b.textContent = (yoso);	
  let p3 = document.querySelector('p#result');	
  

  if(yoso == kotae){
    if(kaisu<4){
      p3.textContent = '正解です. おめでとう！';	
      kaisu=kaisu+1;
    }
    else if(kaisu>=4){
      p3.textContent = '答えは '+(kotae)+ ' でした. すでにゲームは終わっています';
      kaisu=kaisu+1;
    }
  }

  else{
    if(yoso > kotae){
      p3.textContent = 'まちがい. 答えはもっと小さいですよ';
    }
    else if(yoso < kotae){
      p3.textContent = 'まちがい. 答えはもっと大きいですよ';
    }
    kaisu=kaisu+1;
    if(kaisu==4){
      p3.textContent = 'まちがい.答えは '+(kotae)+ ' でした';
    }
    if(kaisu>4){
      p3.textContent = '答えは '+(kotae)+ ' でした. すでにゲームは終わっています';
    }
  }
  
}