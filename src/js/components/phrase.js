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

var utObject = document.getElementById("ph");
var utObjectRu = document.getElementById("ph-ru");

var m = 0;

function change(m) {
  utObject.innerText = set[m];
}
function changeRu(m) {
  utObjectRu.innerText = setRu[m];
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

