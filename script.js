
//Random weetjes

var weetjes = Array("Aardbeien zijn super lekker!", "Welkom bij aardbeien.nl", "Wist je dat aardbeien voor 89% uit water bestaan", "Wist je dat 9/10 van onze specialisten zeggen dat aardbeien lekker zijn", "Weetje: met aardbeien kun je super lekkere jam maken!", "Weetje: Aardbeien zijn rood, als ze dat niet zijn zijn ze niet meer goed", "De perfecte site voor aardbeien liefhebbers", "Brazilie staad bekent om zijn grote aardbeien!");

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
  }else  if (Vraag2 == 3) {
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

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 25,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "Img/particle.png",
        "width": 200,
        "height": 253
      }
    },
    "opacity": {
      "value": 0.9,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 30,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 5,
        "size_min": 20,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 0,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 50,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

function popup(url, amount) 
{
  var i = Math.random();
       newwindow=window.open(url,i,'height=170,width=800');
       if (window.focus) {newwindow.focus()}
       annoyance(newwindow);
       return false;
}

function annoyance(windowtouse) {
       windowtouse.moveTo(windowtouse.screen.availWidth/2
,windowtouse.screen.availHeight/2
);
}


