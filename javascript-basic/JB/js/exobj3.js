// A partir d'une variable : let people = ["Greg", "Mary", "Devon", "James"];
//   Grâce à une boucle, afficher chaque nom sur la console
//    Ecrire les instructions pour supprimer "Greg" du tableau.
//    Ecrire les instructions pour supprimer "James" du tableau.
//    Ecrire les instructions pour ajouter "Matt" au début du tableau
//     Ecrire les instructions pour ajouter votre nom à la fin du tableau
//    Ecrire les instructions pour afficher chaque nom dans la console jusqu'à "Mary"
//    Donner la position où l'élément "Mary" se trouve
//   Donner la position où "Foo" est localisé (doit retourner -1).
//    Créer une nouvelle variable avecBob qui est égal à tous les prénoms reliés par une virgule + le nom de bob. (modifié) 
// Ecrire une fonction qui met en majuscule la première lettre d'un mot
// Ex: capitalize("test") => "Test" (modifié) 


let rusard = ["oh","dear","we","are","in", "trouble"];

console.log(rusard.join(" "));

let gens = ["Greg", "Mary", "Devon", "James"];

// for (let i=0; i < gens.length; i++){
//     console.log(gens[i]);
// }

// gens.shift();
// gens.pop();
// gens.unshift("Matt");
// gens.push("Ludwig");

// console.log(gens.slice(0,2));
// console.log(gens.indexOf("Mary"));
// console.log(gens.indexOf("Foo"));

// let gens1 = ["Greg", "Mary", "Devon", "James"];
// gens1.push("Bob"); 
// console.log(gens1.join(","));


console.log(gens);

// Marche pas
function capi(string){
        let firstletter = string[0].toUpperCase();
    return firstletter + string.slice(1);
    
}

console.log(capi("chef"));


// String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//   }
//   console.log("bonjour".capitalize());

//   console.log("chef".capitalize())