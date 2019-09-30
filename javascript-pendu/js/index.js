let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");


let wordtoguess= [
      ["I","F","R","I","T"],
      ["T","I","T","A","N"],
      ["G","A","R","U","D","A"],
      ["L","E","V","I","A","T","H","A","N"],
      ["R","A","M","U","H"],
      ["S","H","I","V","A"],
      ["O","D","I","N"],
      ["M","O","O","G","L","E"]
]
let random = Math.floor((Math.random()*(wordtoguess.length-1))); 
// Word to guess in the table  
let randomWord = wordtoguess[random]; 
let tableWord = new Array(randomWord.length);
let mistake = 0;

 // each letter is replaced by an underscore in the guess field
    for (let i = 0; i < tableWord.length; i++){
        tableWord[i] = "_ ";
    }
    
    // show how many letters there is
    function printTableWord(){
        for (let i = 0; i < tableWord.length; i++){
            let guessField = document.getElementById("guess-field");
            let letter = document.createTextNode(tableWord[i]);
            guessField.appendChild(letter);
        }
    }
    
    //checks if the letter is present and makes it appear.
    let letterMatch = function(){
        let win;
        let f = document.getElementById("answer"); 
        let checkLet= f.value; // given letter
        checkLet = checkLet.toUpperCase();
        for (let i = 0; i < randomWord.length; i++){
            if(randomWord[i] === checkLet){
                tableWord[i] = checkLet + " ";
                win = true;
            }
            f.value = "";
        }
    
        //erases the guess field content
        let guessField = document.getElementById("guess-field");
        guessField.innerHTML=""; 
        printTableWord();
      
        // if the letter is wrong, starts to draw
        if(!win){
            // guessLetter.appendChild(letter); 
            mistake++;
        }
        
       
        //checks if all the letters were found
        let fullWordGuessed = true;
        for (let i = 0; i < tableWord.length; i++){
            if(tableWord[i] === "_ "){
                fullWordGuessed = false;
            }
        }
        if(fullWordGuessed){
            window.alert("You win!");
        }


// Starts to draw the character

if(mistake === 1){
// head
ctx.lineWidth=3;
ctx.strokeStyle = '#ff0000';
ctx.beginPath();
// ctx.moveTo(250,250);
ctx.arc(220,150,30,0,Math.PI*2,true);
ctx.moveTo(240,170);

ctx.stroke();
ctx.closePath();

}

if(mistake === 2){
// body
ctx.beginPath();
ctx.moveTo(220,180);
ctx.lineTo(220,300);
ctx.stroke();
ctx.closePath();
}
if(mistake === 3){
// left arl
ctx.beginPath();
ctx.moveTo(220,200);
ctx.lineTo(170,240);
ctx.stroke();
ctx.closePath();
}
if(mistake === 4){
// right arm
ctx.beginPath();
ctx.moveTo(220,200);
ctx.lineTo(280,240);
ctx.stroke();
ctx.closePath();
}
if(mistake === 5){
// left leg

ctx.beginPath();
ctx.moveTo(220,300);
ctx.lineTo(170,340);
ctx.stroke();
ctx.closePath();
}
//once you got six wrong letters, you lose
if(mistake === 6){
    // right leg
    ctx.beginPath();
    ctx.moveTo(220,300);
    ctx.lineTo(280,340);
    ctx.stroke();
    ctx.closePath();
    window.alert("You're dead now !");
        }
    }

function init(){
    printTableWord();
}
window.onload = init;

ctx.strokeStyle = "#ffffff";
ctx.lineWidth=5 ;
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,400);
ctx.moveTo(47,50);
ctx.lineTo(223,50);
ctx.moveTo(220,50);
ctx.lineTo(220,120);
ctx.stroke();
ctx.closePath();
// beam up

ctx.beginPath();
ctx.moveTo(100,50);
ctx.lineTo(50,100);
ctx.stroke();
ctx.closePath();

// beam down right

ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(90,420);
ctx.stroke();
ctx.closePath();

// beam down left

ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(20,420);
ctx.stroke();
ctx.closePath();

