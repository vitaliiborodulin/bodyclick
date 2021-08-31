var set = ["вазндан халос булишни",
  "чиройли қоматга",
  "янги овқатланиш",
  "ўзига бўлган ишончга"];

var setRu = [
  "скинуть лишние килограммы",
  "подтянутое тело",
  "новые пищевые привычки",
  "уверенность в себе"
];

var sevenRu = [
  "ценит своё время",
  "готов потерять до 5 кг за неделю",
  "нацелен на результат"
];

var seven = [
  "Ўз вақтини қадрловчилар учун",
  "бир ҳафтада 5 кг гача йўқотишни истаганлар учун",
  "мақсадга эришмоқчи бўлганлар учун"
];

var utObject = document.getElementById("ph");
var utObjectRu = document.getElementById("ph-ru");

var utSevenObject = document.getElementById("seven");
var utSevenObjectRu = document.getElementById("seven-ru");

var m = 0;

function change(m) {
  utObject.innerText = set[m];
}
function changeRu(m) {
  utObjectRu.innerText = setRu[m];
}
function changeSeven(m) {
  utSevenObject.innerText = seven[m];
}
function changeSevenRu(m) {
  utSevenObjectRu.innerText = sevenRu[m];
}

if (utObject) {
  setInterval(function () {
    change(m);
    m++;
    if (m >= set.length) {
      m = 0;
    }
  }, 3000);
}

if (utObjectRu) {
  setInterval(function () {
    changeRu(m);
    m++;
    if (m >= setRu.length) {
      m = 0;
    }
  }, 3000);
}

if (utSevenObject) {
  setInterval(function () {
    changeSeven(m);
    m++;
    if (m >= seven.length) {
      m = 0;
    }
  }, 3000);
}

if (utSevenObjectRu) {
  setInterval(function () {
    changeSevenRu(m);
    m++;
    if (m >= sevenRu.length) {
      m = 0;
    }
  }, 3000);
}

