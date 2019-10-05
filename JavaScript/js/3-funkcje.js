function mnozenie(liczba1, liczba2, liczba3) {
    // przypisuję do zmiennej "wynik" wynik mnozenia trzech parametrów
    let wynik = liczba1 * liczba2 * liczba3;

// Tworzę tekst z wynikiem - 2 sposoby - ES5 i ES6
    let rezultatDzialaniaFunkcji = "Twój wynik to: " + wynik;
    let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;

    // Zwracam z funkcji rezultat jej działania. Wszystko ponizej return juz sie nie wykona
    return rezultatDzialaniaFunkcji2;
}

let wynikDzialaniaFunkcji = mnozenie(2,2,2);
//console.log(wynikDzialaniaFunkcji);

// Przepisanie powyzszej funkcji na funkcję strzałkową
const mnozenieFatArrow = (par1, par2, par3) => {
    let wynik = par1 * par2 * par3;
    let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;
    return rezultatDzialaniaFunkcji2;
}

let wynikMnozeniaFatArrow = mnozenieFatArrow(3,3,3);
console.log(wynikMnozeniaFatArrow);

// Przepisanie powyzszej funkcji na funkcję strzałkową - skrótowo

const mnozenieSkrotowo = (p1, p2, p3) => `Twój wynik to:  ${p1 * p2 * p3}`;
let wynikSkrotowo = mnozenieSkrotowo(1,2,3);
console.log(wynikSkrotowo);
