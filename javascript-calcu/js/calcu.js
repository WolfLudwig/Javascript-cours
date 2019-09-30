// console.log(eval(12+2-1));
let input ="";

//récupération des boutons
let buttons = document.getElementsByClassName("button");
// console.log(buttons[5].value);

//boucle pour que les boutons fonctionnent
for (let i = 0; i < buttons.length; i++){
    // console.log(buttons[i].value);
    // appelle à la fonction via le click
    buttons[i].addEventListener("click", showvalue);
}

//pareil qu'au dessus mais pour le reset
let rset = document.getElementById("reset");
rset.addEventListener("click", reset);

// remove
let rmove = document.getElementById("remove");
rmove.addEventListener("click", remove);

// egal
let equal = document.getElementById("result")
equal.addEventListener("click", domaths)

// fonction pour afficher les valeur dans l'écran
function showvalue(){
    input = input + this.value;

    document.getElementById("output").innerHTML = input;
}

// Fonction pour faire les calculs
function domaths(){
    input = eval(input);
    document.getElementById("output").innerHTML = input;
}

//fonction reset
function reset(){
    document.getElementById("output").innerHTML = "Un autre calcul?"
    input = ""
}


// fonction remove; remplace et coupe le dernier élément.
function remove(){
    input = input.replace(input.slice(-1), "")
    document.getElementById("output").innerHTML = input;
}
