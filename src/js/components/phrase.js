var set = ["вазндан халос булишни",
"чиройли қоматга",
"янги овқатланиш",
"ўзига бўлган ишончга"];
var utObject = document.getElementById("ph");

var m=0;

function change (m){
    utObject.innerText = set[m];
}
//setInterval (change, 5000);
setInterval(function(){
  change(m);
  m++;
  if (m >= set.length) {
    m = 0;
  }
}, 3000);
