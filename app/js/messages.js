document.addEventListener("DOMContentLoaded", function() {
  var name = document.getElementById("charaName").value;
  var message = new MessageViewer({
    "data": [{
      "side_class": "right",
      "name": "まな爺",
      "message":"やあやあ。<br>ここではまなみーで獲得したキャラクターを育てることができるぞい。<br>例えば、ほれ。こいつなんかも育てられるぞ。",
      "img_url": "images/sample001/tutorial_toniji01.png"
    },
    {
      "side_class": "left",
      "name": "一代目　ミミ",
      "message":"みゅ〜〜〜〜！！",
      "img_url": "images/sample001/grade3_stay@2x.png"
    },
    {
      "side_class": "center",
      "name": "まな爺",
      "message":"まずは、ガチャを引いて育てる友達を決めるのじぁ。",
      "img_url": "images/sample001/tutorial_toniji01.png"
    },
    {
      "message":"いったれい！"
    },
    {
      "side_class": "center",
      "name": "まな爺",
      "message":"分かったぞ。可愛がってあげるんだぞ。",
      "img_url": "images/sample001/tutorial_toniji01.png"
    },
      {
        "side_class": "center",
        "name": "まな爺",
        "message":"準備はできた。よし、まなワールドの世界に行くぞい！",
        "img_url": "images/sample001/tutorial_toniji01.png"
      }
    ],
    "option": {
      "loop": false
    }
  });
}, false);
