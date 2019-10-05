const samochody = [
"Honda",
"Fiat",
"Citroen",
"Mazda",
"Audi",
];


// dodajemy na końcu tablicy
samochody.push("BMW", "Porshe");

// dodajemy na początku
samochody.unshift("Dacia", "Skoda");

// usuwamy z końca tablicy i zwracamy usunięty element zmiennej
let usunietyZKonca = samochody.pop();


// usuwamy z końca 3 elementy z końca
let usunieteZKonca3 = samochody.splice(samochody.length - 3);



//usuwamy z początku tablicy i zwracamy usunięty element do zmiennej
let usunieteZPoczatku = samochody.shift();
console.log(samochody, samochody.length);
console.log(`Usunięty element z przodu to: ${usunieteZPoczatku}`);


// zamiana tablicy na string
let tekstZTablicy = samochody.join("=======");

//console.log(samochody, samochody.length);
console.log(tekstZTablicy);

//tablica ze stringa
let tablicaZeStringa = tekstZTablicy.split("==========");

//console.log(samochody, samochody.length);
console.log(tablicaZeStringa);

//odwrócenie tablicy
let odwroconaTablica = samochody.reverse();
console.log(odwroconaTablica);

//posortowana tablica
let posortowana = samochody.sort();
console.log(posortowana);


// sprawdzam czy element instnieje w tablicy ver 1 - zwraca index elementu, jeśli brak zwraca -1
let czyIstniejeWTablicy = samochody.indexOf("Polonez");
console.log(czyIstniejeWTablicy);

// sprawdzam czy element instnieje w tablicy ver 2 - zwraca true albo false
let czyIstniejeWTablicy2 = samochody.includes("Citroen");
console.log(czyIstniejeWTablicy2)

// sprawdzam czy zmienna jest tablicą - zwraca true albo false

let czyTablica = Array.isArray(samochody);
console.log(czyTablica);

// metoda do "przechodzenia" po wszystkich elementach tablicy

samochody.forEach(function(elementTablicy, indexTablicy, tablica){
console.log(`Wartość elementu: ${elementTablicy} | index elementu: ${indexTablicy}`);
});

