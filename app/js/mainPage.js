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
      document.getElementById("mainCharaImg").src='images/characters/'+ charaNum + '/grade2_stay@2x.png';
      document.getElementById("food1").style.display = "none";
      for(i=0; i<=100; i++){

      }
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
