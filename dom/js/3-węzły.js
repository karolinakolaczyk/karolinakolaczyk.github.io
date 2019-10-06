const div = document.getElementsByClassName("par-first")[0];
const rodzicDiva = div.parentElement;
const potomkowieDiva = div.children;
const pierwszyPotomekDiva = div.firstElementChild;
const ostatniPotomekDiva = div.lastElementChild;
const elementPrzedDivem = div.previousElementSibling;
const elementZaDivem = div.nextElementSibling;

console.log(div);
console.log(rodzicDiva);
console.log(potomkowieDiva);
console.log(pierwszyPotomekDiva);
console.log(ostatniPotomekDiva);
console.log(elementPrzedDivem);
console.log(elementZaDivem);
console.log(elementZaDivem.nextElementSibling); 