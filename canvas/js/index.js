let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");

// Cadre
ctx.fillRect(10,20,100,200);
ctx.strokeRect(20, 30, 100, 200);
ctx.clearRect(35, 75, 50, 100);

// SabLier !
ctx.beginPath();
ctx.moveTo(200, 20);
ctx.lineTo(400,300);
ctx.lineTo(200,300);
ctx.lineTo(400,20);
ctx.lineTo(200,20);
ctx.lineTo(285,140);
ctx.lineTo(315,140);
ctx.lineTo(215,280);
ctx.lineTo(385,280);
ctx.lineTo(300,280);
ctx.lineTo(300,158);
ctx.stroke();

ctx.beginPath();
// ctx.moveTo(20,400);
ctx.arc(75,400,50,0,Math.PI,true);
ctx.stroke();

// Toto!
ctx.beginPath();
ctx.arc(400,400,100,0,Math.PI*2,true);
ctx.moveTo(385,360);
ctx.arc(360,360,25,0,Math.PI*2,true);
ctx.moveTo(465,360);
ctx.arc(440,360,25,0,Math.PI*2,true);
ctx.moveTo(400,400);
ctx.lineTo(400,420);
ctx.moveTo(390,410);
ctx.lineTo(410,410);
ctx.moveTo(370,450);
ctx.lineTo(430,450);
ctx.moveTo(370,460);
ctx.lineTo(430,460);
ctx.stroke();



