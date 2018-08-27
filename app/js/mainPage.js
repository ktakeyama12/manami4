a=1;

$('#food1').draggable();
$('#food2').draggable();

$("#mainCharaImg").droppable({
  //ドロップOKの要素を指定
  accept :"#food1, #food2" ,
  //ドロップ時の動作
  drop : function(){
    if(a==1){
      var charaNum = document.getElementById("charaNum").innerHTML;
      $("#mainCharaImg").fadeOut();
      document.getElementById("mainCharaImg").src='images/characters/'+ charaNum + '/grade2_stay@2x.png';
      $("#mainCharaImg").fadeIn();
      document.getElementById("food1").style.display = "none";
      a++;
    }else{
      var charaNum = document.getElementById("charaNum").innerHTML;
      console.log(charaNum);
      document.getElementById("mainCharaImg").src='images/characters/'+ charaNum + '/grade3_stay@2x.png';
      document.getElementById("food2").style.display = "none";
    }
  }
});

function evolve(charaNum){

}

//時間を取得するbyじょい
document.getElementById("date").innerHTML = getNow();
function getNow() {

  //今日の日付データを変数nowに格納
  var now = new Date();

  //月・日・曜日・時間を取得する
  var month = now.getMonth() + 1;
  var week = now.getDay();
  var day = now.getDate();
  var hour = now.getHours();

  var yobi = new Array("日", "月", "火", "水", "木", "金", "土");

  var s = month + "月" + day + "日 " + yobi[week] + "曜日";
  return s;
}
