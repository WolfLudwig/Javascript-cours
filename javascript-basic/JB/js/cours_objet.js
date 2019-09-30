let crayon = {
    couleur: "bleu",
    forme: "cylindre",
    nbMine: 1 ,
    ecrirecoucou: function(){
        alert("coucou");
    },
    ecrirenom: function(name){
        alert("coucou " + name);
    },
    ecrireprop: function(){
        alert("mon crayon est " + this.couleur);
    }

};

console.log(crayon.couleur);
console.log(crayon.nbMine);

crayon.ecrirecoucou();
crayon.ecrirenom("bernard");

// alert(" ") = window.alert(" ")

let str = "coucou les gens";
console.log(str.toUpperCase());