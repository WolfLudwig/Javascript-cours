let quotes = [
    "Sa spécialité est de n'avoir aucune spécialité (Yuri - Angel Beats!)",
    "Un homme où ça je n'en voit aucun'' (Père Fujimoto - Ao no exorcist)",
    "Merci Dieu de l'avoir fait naître crétin. (Ighigo - Bleach)",
    "Si j'y vais ce n'est pas pour mourir, mais pour me prouver à moi-même que je suis encore vivant (Spike Spiegel - Cowboy Bebop)",
    "Interdit de mourir sous mon commandement. T'es déjà pas un cadeau, pas besoin de paperasse (Roy Mustang - FMA)",
    "Quand je serai Commandant, tout le personnel féminin de l'armée devra porter des mini-jupes !! (Roy Mustang - FMA)",
    "Moi c'est Eikichi Onizuka, 22 ans, célibataire et libre comme l'air ! (Eikichi Onizuka - GTO)",
    "T'es con naturellement ou t'as pris des cours ? (E. Onizuka - GTO)",
    "Ça c'est un coup de poing dans la gueule pédagogique ! (E. Onizuka - GTO)",
    "Tu ne le sais pas encore, mais tu es déjà mort (Ken le survivant)",
  ];

  let color = [
      "#0ccccc", "#cc0ccc", "#E67E30", "#884DA7", "#874132" , "#a92c98" , "#2c98a9" , "#32a92c" , "#2c32a9" , "#ece20c"
  ];
  
  // function newquote() {
  //   let randomQuote = Math.floor(Math.random() * quotes.length);
  //   document.getElementById("quote").innerHTML = quotes[randomQuote];
  // }
  // function newcolor() {
  //   let randomColor = Math.floor(Math.random() * color.length);
  //   console.log(color[randomColor]);
  //   document.getElementById("quote").style.color = color[randomColor];
  //   document.body.style.backgroundColor = color[randomColor];
  // }

  let button = document.getElementsByClassName("button");
  for (i = 0; i < button.length; i++){
    button[i].addEventListener("click", random);
  }
  function random(){
    let rquote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[rquote];
    let rcolor = Math.floor(Math.random() * color.length);
    document.getElementById("quote").style.color = color[rcolor];
    document.body.style.backgroundColor = color[rcolor];
  }