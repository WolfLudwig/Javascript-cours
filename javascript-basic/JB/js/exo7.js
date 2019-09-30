
let nb = prompt("Combien y a t'il de crayon'");
let tab = [];

for (let i = 0; i<nbn; i++){
    tab[i] = prompt("la couleur du crayon " + (i+1));
    
}
let count = 0;
let coul = prompt("Pour quelle couleur veux tu savoir le nombre de crayon?");
    for (let i = 0; i<nb; i++) {
        if (coul == tab[i]) {
            count ++;
        }
    }
if (count != 0) {
    console.log("il en a " + count +" de cette couleur" );
}
else if (count == 0) {
    console.log("il n'y a pas de crayon de la couleur " + coul);
}
