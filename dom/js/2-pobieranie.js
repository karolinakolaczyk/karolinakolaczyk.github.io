// po id
const section = document.getElementById("section-first");
console.dir(section);
//console.dir zamiast console.log zeby wyświetlić wszystkie elementy w konsoli

// po klasie
const links = document.getElementsByClassName("link");
console.dir(links);

for(let i = 0; i < links.length; i++) {
    console.dir(links[i]);
}

[...links].forEach((element, index) => {
    console.dir(element);
});

// ES6 spread operator [...links] rozbija tablice na poszczególne tablice, ale rozbite elementy umieszcza w tablicy

// po tagach html
const p = document.getElementsByTagName("p");
console.dir(p);

// po dowolnym selektorze
const divs = document.querySelectorAll("div");
console.dir(divs);