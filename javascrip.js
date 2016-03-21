var myP = document.querySelector(".ecran");
var bouton = document.getElementsByClassName('touche');
var clearEcran = document.getElementById("clear");
var egalEcran = document.getElementById('egal');
var pushEcran = function() {
    myP.innerHTML += this.innerHTML;
}

var egal = function(){
myP.innerHTML = eval(myP.innerHTML);
}

var clear = function(){
  myP.innerHTML = "";
}

for (var i=0; i<bouton.length; i++) {
bouton[i].addEventListener('click', pushEcran, false);
};

egalEcran.addEventListener("click", egal, false);
clearEcran.addEventListener('click', clear, false);
