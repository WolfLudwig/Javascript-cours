let link = document.getElementsByTagName("a");
console.log(link);
for (let i = 0; i < link.length; i++) {
  link[i].href = "#";
}
