function roll(){
  var charaNum = Math.floor(Math.random() * 11 + 1);
  document.charaImg.src = 'images/characters/'+ charaNum + '/grade1_stay@2x.png';
  $("#charaImg").fadeIn();
  $("#naming").fadeIn();
  document.getElementById("roll").style.display = "none";

  // 本来はデータベースから所得
  document.mainCharaImg.src = 'images/characters/'+ charaNum + '/grade1_stay@2x.png';
}

function naming(){
  var name = document.getElementById("charaName").value;
  console.log(name);
  document.getElementById("namingMessage").innerText = "分かったぞ、" + name + "を可愛がってね。";
  document.getElementById("naming").style.display = "none";
  document.getElementById("goToMainPage").style.display = "block";

  // 本来はデータベースから所得
  document.getElementById("mainCharaName").innerText = name;
}

function goToMainpage(){
  document.getElementById("gacha").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}
