function moyenne(tab, nbn){
    let sum = 0;
    for (let i = 0; i<nbn; i++){
        sum = sum + tab[i];
    }
    return sum/tab.length;
}
let nbn = Number(prompt("Combien y a t'il de note"));
let tab = [];


for (let i = 0; i<nbn; i++){
    tab[i] = Number(prompt("Donne moi la note"));
}

let nmo = 0;
for (let i = 0; i<nbn; i++){
    if (tab[i] >= 10) {
        nmo = nmo + 1;
    }
}
alert(nmo + " notes au dessus de 10");
alert("la moyenne est de " + moyenne(tab, nbn))