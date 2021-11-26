
//Random weetjes

var weetjes = Array("Aardbeien zijn super lekker!", "Welkom bij aardbeien.nl", "Wist je dat aardbeien voor 89% uit water bestaan", "Wist je dat 9/10 van onze specialisten zeggen dat aardbeien lekker zijn", "Weetje: met aardbeien kun je super lekkere jam maken!", "Weetje: Aardbeien zijn rood, als ze dat niet zijn zijn ze niet meer goed", "De perfecte site voor aardbeien liefhebbers");

//RNG
var rweetje = weetjes[Math.floor(Math.random()*weetjes.length)];

//Update pagina
//Weetjes
document.getElementById("Weetje").innerHTML = rweetje;

//QUIZ
