let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 500);
ctx.lineTo(200, 500);
ctx.moveTo(125, 500);
ctx.lineTo(125, 150);
ctx.lineTo(450,150);
ctx.moveTo(150,150);
ctx.lineTo(125 , 175);
ctx.moveTo(400, 150);
ctx.lineTo(400, 175);
ctx.moveTo(425, 200);
ctx.arc(400, 200, 25,0, Math.PI*2, true); //tête
ctx.moveTo(400, 225); //corps
ctx.lineTo(400, 325); 
ctx.moveTo(400, 325);
ctx.lineTo(375, 375); //jambe 1
ctx.moveTo(400, 325);
ctx.lineTo(425, 375); //jambe 2
ctx.moveTo(400, 235);
ctx.lineTo(425, 270); //bras 1
ctx.moveTo(400, 235);
ctx.lineTo(375, 270); //bras 2
ctx.stroke();

//tableau!

let mots = [
    "pendu",
    "vampire",
    "merci",
    "crepe",
    "gentil",
    "gentil"
];

//fonctions

let newg = document.getElementsByClassName("newgame");
let chance= 6;

for (i = 0; i < newg.length; i++){
  newg[i].addEventListener("click", mot);
}

function mot(){
    let randomWord = Math.floor(Math.random() * mots.length);
    mot=mots[randomWord];
    cache=mot;
    document.getElementById("screen").innerHTML=cache;
    console.log(mot);
}
function perdu(){
    chance = chance--;
    
}

if (chance <= 5){
  ctx.beginPath();
  ctx.arc(400, 200, 25,0, Math.PI*2, true); //tête
  ctx.stroke();
}

if (chance <= 4){ctx.beginPath();
  ctx.moveTo(400, 225); //corps
  ctx.lineTo(400, 325); 
  ctx.stroke();}


if (chance <= 3){ctx.beginPath();
  ctx.moveTo(400, 325);
  ctx.lineTo(375, 375); //jambe 1
  ctx.stroke();}

if (chance <= 2){ctx.beginPath();
  ctx.moveTo(400, 325);
  ctx.lineTo(425, 375); //jambe 2
  ctx.stroke();}

if (chance <= 1){ctx.beginPath();
  ctx.moveTo(400, 235);
  ctx.lineTo(425, 270); //bras 1
  ctx.stroke();}

if (chance <= 0){ctx.beginPath();
  ctx.moveTo(400, 235);
  ctx.lineTo(375, 270); //bras 2
  ctx.stroke();}

let moins = document.getElementById("test");
moins.addEventListener("click", perdu);