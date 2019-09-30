
let nbn = prompt("Combien y a t'il d'info'")
let tab = [];

for (let i = 0; i<nbn; i++){
    tab[i] = prompt("Donne moi une info");
    
}
let count = false;
let intel = prompt("une info?");
    for (let i = 0; i<nbn; i++) {
        if (intel == tab[i]) {
            console.log("c'est la valeur " + i);
            count = true;
        }
    }
if (!count) {
    console.log("n'existe pas");
}
