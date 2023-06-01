let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

let mydata = [
  {tosimei: "カイロ",tosiID: "360630"},
  {tosimei: "モスクワ",tosiID: "524901"},
  {tosimei: "ヨハネスブルク",tosiID: "993800"},
  {tosimei: "北京",tosiID: "1816670"},
  {tosimei: "東京",tosiID: "1850147"},
  {tosimei: "シンガポール",tosiID: "1880252"},
  {tosimei: "シドニー",tosiID: "2147714"},
  {tosimei: "ロンドン",tosiID: "2643743"},
  {tosimei: "パリ",tosiID: "2968815"},
  {tosimei: "リオデジャネイロ",tosiID: "3451189"},
  {tosimei: "ニューヨーク",tosiID: "5128581"},
  {tosimei: "ロサンゼルス",tosiID: "5368361"}
]

////////// 課題3-2 ここからプログラムを書こう
let kensaku = document.querySelector('button#kensaku');
kensaku.addEventListener('click', where);



// 通信を開始する処理
function where() {

    let i = document.querySelector('input[name="tosi"]');
    let tosi = i.value;       // ユーザが記入した文字列
    console.log(tosi);
    for(let n of mydata){
      if(tosi==(n.tosimei)){
        //検索した文字を数字に変換し、その数字をidに代入する
        let id =(n.tosiID);
  
        // URL を設定
        let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
  
        // 通信開始
        axios.get(url)
         .then(showResult)   // 通信成功
         .catch(showError)   // 通信失敗
         .then(finish);      // 通信の最後の処理
      }
    }
    
    if(tosi=='カイロ'){
      //検索した文字を数字に変換し、その数字をidに代入する
      let id ='360630';

      // URL を設定
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
      
      // 通信開始
      axios.get(url)
       .then(showResult)   // 通信成功
       .catch(showError)   // 通信失敗
       .then(finish);      // 通信の最後の処理
    }   
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    console.log(data.name)
    console.log(data.weather[0].description)
    console.log(data.main.temp_min)
    console.log(data.main.temp_max)
    console.log(data.main.humidity)
    const para = document.querySelector('p');

    // data.x を出力
    console.log(data.x);

    let tenkiyohou = document.querySelector('span#tenki');		
    tenkiyohou.textContent = (data.weather[0].description);	
    let max = document.querySelector('span#saikoukion');		
    max.textContent = (data.main.temp_max);	
    let min = document.querySelector('span#saiteikion');		
    min.textContent = (data.main.temp_min);	
    let situdo = document.querySelector('span#situdo');		
    situdo.textContent = (data.main.humidity);	

}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}







