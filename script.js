
//Random weetjes

var weetjes = Array("Aardbeien zijn super lekker!", "Welkom bij aardbeien.nl", "Wist je dat aardbeien voor 89% uit water bestaan", "Wist je dat 9/10 van onze specialisten zeggen dat aardbeien lekker zijn", "Weetje: met aardbeien kun je super lekkere jam maken!", "Weetje: Aardbeien zijn rood, als ze dat niet zijn zijn ze niet meer goed", "De perfecte site voor aardbeien liefhebbers");

//RNG
var rweetje = weetjes[Math.floor(Math.random()*weetjes.length)];

//Update pagina
//Weetjes
document.getElementById("Weetje").innerHTML = rweetje;

//QUIZ

var Vraag1 = -1;
var Vraag2 = -1;
var Vraag3 = -1;

var Resultaten = Array("Een mens","Een aardbei","Een aardappel","Pindakaas","Verbrande patat","Verrote aardbei","De gouden aardbei");
var Ant = 0;

function Antwoord(vraag, antwoord) {

if (vraag == 1) {
  Vraag1 = antwoord;
}else
if (vraag == 2) {
  Vraag2 = antwoord;
}else
if (vraag == 3) {
  Vraag3 = antwoord;
}

//Antwoorden

//Heel veel if statements :D
if (Vraag1 == 1 || Vraag1 == 3) {
  if (Vraag2 == 1) {
    Ant = 4;
  }else {
    Ant = 2;
  }
}else 
if (Vraag1 == 2) {
  if (Vraag2 == 2) {
    Ant = 1;
  }else if (Vraag2 == 1 || Vraag2 == 4) {
    Ant = 5;
  }else  if (Vraag3 == 3) {
    Ant = 6;
  }
}else
if (Vraag1 == 4) {
  if (Vraag2 == 4) {
    Ant = 3;
  }else {
    Ant = 1
  }

}else Ant = 0;

var resultaat = Resultaten[math.floor(Ant)];

}
function Show() {
  document.getElementById("antwoord").innerHTML = resultaat;
}

