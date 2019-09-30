function Rectangle (longueur, largeur){
    this.longueur = longueur;
    this.largeur = largeur;
    this.getPerimetre =  function()
    {
      return (this.longueur + this.largeur)*2;
    }
    this.getAire = function(){
        return (this.longueur + this.largeur);
    }
    this.isSquare = function(){
        if (longueur == largeur) {
        console.log("c'est un carré")
    } else {
        console.log("ce n'est pas un carré")
    }
    }
}
//methode 1
// let rectangle1 = new Rectangle(10,5);
// console.log(rectangle1.getAire());

// let rectangle2 = new Rectangle(5,5);
// console.log(rectangle2.getAire());

// let rectangle3 = new Rectangle(7,5);
// rectangle3.isSquare();

// let rectangle4 = new Rectangle(10,10);
// rectangle4.isSquare();

// let rectangle5 = new Rectangle(10,12);
// console.log(rectangle5.getPerimetre());

//methode 2
// let rectangles = [];
// let longueur, largeur;
// for (let i = 0; i < 5; i++) {
//     longueur = Number(prompt("la longueur du rectangle " + i));
//     largeur = Number(prompt("la largeur du rectangle " + i));
//     rectangles[i] = new Rectangle(longueur, largeur);
//     console.log(rectangles[i].getAire());
// }

let rectangles = [];

rectangles[0] = new Rectangle(12,12);
rectangles[1] = new Rectangle(5,7);
rectangles[2] = new Rectangle(6,3);
rectangles[3] = new Rectangle(2,2);
rectangles[4] = new Rectangle(4,1);

for(let i=0; i< rectangles.length; i++)
{

    console.log(rectangles[i]);
    console.log("Perimetre de l'objet "+ i + "=" + rectangles[i].getPerimeter());
    console.log("Aire de l'objet "+ i + "=" + rectangles[i].getArea());
    if(rectangles[i].isSquare())

    {
        console.log("C'est un carré");
    }

    else

    {
        console.log("Ce n'est pas un carré");
    }

}