


//Random weetjes

var weetjes = Array("Aardbeien zijn super lekker!", "Welkom bij aardbeien.nl", "Wist je dat aardbeien voor 89% uit water bestaan", "Wist je dat 9/10 van onze specialisten zeggen dat aardbeien lekker zijn", "Weetje: met aardbeien kun je super lekkere jam maken!", "Weetje: Aardbeien zijn rood, als ze dat niet zijn zijn ze niet meer goed", "De perfecte site voor aardbeien liefhebbers");

var quizantwoord = Array("Een mens","Een aardbei","Een aardappel","Pindakaas","Verbrande patat","Verrote aardbei","De gouden aardbei","Teer");


//RNG
var rweetje = weetjes[Math.floor(Math.random()*weetjes.length)];

var resultaat = "NULL";

//Update pagina
//Weetjes
document.getElementById("Weetje").innerHTML = rweetje;

//QUIZ

var Vraag1 = -1;
var Vraag2 = -1;
var Vraag3 = -1;

var Ant = 0;

function Antwoord(vraag, antwoord) {

//Button kleurverandering

if (vraag == 1) {
  document.getElementById("vraag1").className = "vraag";
  document.getElementById("vraag2").className = "vraag";
  document.getElementById("vraag3").className = "vraag";
  document.getElementById("vraag4").className = "vraag";

  document.getElementById("vraag" + antwoord).className = "vraagbeantwoord";
}
if (vraag == 2) {
  document.getElementById("vraag5").className = "vraag";
  document.getElementById("vraag6").className = "vraag";
  document.getElementById("vraag7").className = "vraag";
  document.getElementById("vraag8").className = "vraag";

  document.getElementById("vraag" + (antwoord+4)).className = "vraagbeantwoord";
}
if (vraag == 3) {
  document.getElementById("vraag9").className = "vraag";
  document.getElementById("vraag10").className = "vraag";

  document.getElementById("vraag" + (antwoord+8)).className = "vraagbeantwoord";
}








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
  }else if (Vraag2 == 1){
    Ant = 8;
  }else {
    Ant = 1;
  }

}else Ant = 0;


}
function Show() {
  resultaat = "PATATJE";

  resultaat = quizantwoord[Ant];

  document.getElementById("ant").innerHTML = resultaat;

}

