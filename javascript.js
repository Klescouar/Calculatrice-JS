var myP = document.querySelector(".ecran p");
var un = document.getElementById('un');
var deux = document.getElementById('deux');
var trois = document.getElementById('trois');
var quatre = document.getElementById('quatre');
var cinq = document.getElementById('cinq');
var six = document.getElementById('six');
var sept = document.getElementById('sept');
var huit = document.getElementById('huit');
var neuf = document.getElementById('neuf');
var point = document.getElementById('point');
var divi = document.getElementById('divi');
var multi = document.getElementById('multi');
var addi = document.getElementById('addi');
var zero = document.getElementById('zero');
var egal = document.getElementById('egal');
var pourcent = document.getElementById('pourcent');
var calculette = document.getElementById('calculette');

var pushEcran1 = function() {
  myP.innerHTML += 1;
};

var pushEcran2 = function() {
  myP.innerHTML += 2;
};
var pushEcran3 = function() {
  myP.innerHTML += 3;
};
var pushEcran4 = function() {
  myP.innerHTML += 4;
};
var pushEcran5 = function() {
  myP.innerHTML += 5;
};
var pushEcran6 = function() {
  myP.innerHTML += 6;
};
var pushEcran7 = function() {
  myP.innerHTML += 7;
};
var pushEcran8 = function() {
  myP.innerHTML += 8;
};
var pushEcran9 = function() {
  myP.innerHTML += 9;
};
var pushEcran0 = function() {
  myP.innerHTML += 0;
};
var pushEcranplus = function() {
  myP.innerHTML += "+";
};
var pushEcranx = function() {
  myP.innerHTML += "*";
};
var pushEcranslash = function() {
  myP.innerHTML += "/";
};
var pushEcranpourcent = function() {
  myP.innerHTML = "";
};
var pushEcranpoint = function() {
  myP.innerHTML += ".";
};

var recup = function() {
var calcul = parseInt(myP.innerHTML);
console.log(calcul);
};




un.addEventListener("click", pushEcran1, false);
deux.addEventListener("click", pushEcran2, false);
trois.addEventListener("click", pushEcran3, false);
quatre.addEventListener("click", pushEcran4, false);
cinq.addEventListener("click", pushEcran5, false);
six.addEventListener("click", pushEcran6, false);
sept.addEventListener("click", pushEcran7, false);
huit.addEventListener("click", pushEcran8, false);
neuf.addEventListener("click", pushEcran9, false);
zero.addEventListener("click", pushEcran0, false);
divi.addEventListener("click", pushEcranslash, false);
multi.addEventListener("click", pushEcranx, false);
pourcent.addEventListener("click", pushEcranpourcent, false);
point.addEventListener("click", pushEcranpoint, false);
addi.addEventListener("click", pushEcranplus, false);
calculette.addEventListener("click", recup, false);
