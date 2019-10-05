let liczba1 = 15;
let liczba2 = 5;
let liczba3 = 2;

// operatory arytmetyczne
const mnozenie = liczba1 * liczba2;
const dzielenie = liczba1/liczba3;
const dodawanie = liczba1 + liczba3;
const odejmowanie = liczba2 - liczba3;
const modulo = liczba2 % liczba3;

console.log(mnozenie, dzielenie, dodawanie, odejmowanie, modulo);

// preinkrementacja / postinkrementacja
//let pre = ++liczba3;
//let post = liczba2++;
//console.log(pre, post);
//post = liczba2;
//console.log(post);

//console.log(liczba1, liczba1++);
//console.log(liczba2, ++liczba2);
//console.log(liczba1);

// operatory porównania
console.log(liczba1 === "15");
console.log(liczba1 >= liczba3);
console.log(liczba1 > liczba2 && liczba2 > liczba3);
console.log(liczba1 < liczba2 || liczba2 > liczba3);

// operator trójargumetowy
let wynik = (liczba2 == liczba3) ? "TAK" : "NIE";
console.log(wynik);

//negacja !true=false !false=true
console.log(!true);

liczba3 += 15;
// liczba3 = liczba3 +15;
console.log(liczba3);
