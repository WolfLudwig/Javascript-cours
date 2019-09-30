let section = document.getElementsByTagName("section")
console.log(section);
for(let i=0; i < section.length; i++){
    console.log(section[i].id);
}
let nav = document.createElement("nav");
let portfolio = document.getElementById("portfolio");
document.body.insertBefore(nav, portfolio);

let ul = document.createElement("ul");
nav.appendChild(ul);

for(let i=0; i < section.length; i++){
    let li = document.createElement("li");
    ul.appendChild(li);
    let links = document.createElement("a");
    links.href = "#"+section[i].id;
    let name = document.createTextNode(section[i].textContent);
    links.appendChild(name);
    li.appendChild(links);
}
// let links = document.createElement("a");
// for(let i=0; i < section.length; i++){
//     links.href = "#"+section[i].id;
// }
// li.appendChild(links);