// let voiture = {
//     nbroue: 4,
//     couleur: "grise",
//     marque: "Volkswagen",
//     modèle: "Golf 3" ,
//     vroum: function(){
//         alert("vrouuuummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
//     },
//     ecrireprop: function(){
//         alert("je suis du modèle " + this.modèle);
//     }
// };
// let voiture2 = {
//     nbroue: 4,
//     couleur: "rouge",
//     marque: "Fiat",
//     modèle: "Multipla" ,
//     vroum: function(){
//         alert("vrouuuummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
//     },
//     ecrireprop: function(){
//         alert("je suis du modèle " + this.modèle);
//     }
// };

// console.log(voiture.nbroue +" "+ voiture.marque +" "+ voiture.modèle);
// console.log(voiture2.nbroue +" "+ voiture2.marque +" "+ voiture2.modèle);
// voiture.vroum();
// voiture.ecrireprop();
// voiture2.vroum();
// voiture2.ecrireprop();

function voiture (marque, modele, annee){
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
}

let voiture1 = new voiture("Opel","Corsa",2008);
console.log(voiture1.annee);

let voiture2 = new voiture("Renaud","R5",1988);
console.log(voiture2.annee);

let voiture3 = new voiture("la mobylete","à Momo","hier");
console.log(voiture3.modele);
alert("vroom!")