let kolekcjaAut = [];



class Samochod {
    constructor(marka, model, przebieg, silnik, rok, kolor) {
this.marka = marka;
this.model = model;
this.przebieg = przebieg;
this.silnik = silnik;
this.rok = rok;
this.kolor = kolor;

    }
    wyswietlInfo() {
        console.log(`
        Samochód\n
        Marka: ${this.marka}\n
        Model: ${this.model}\n
        Przebieg: ${this.przebieg}\n
        Silnik: ${this.silnik}\n
        Rok: ${this.rok}\n
        Kolor: ${this.kolor}
        `);
    }

    zapiszDoBazy() {
        kolekcjaAut.push(this);
    }
}
let auto1 = new Samochod(
    "BMW",
    "X6",
    50000,
    "diesel",
    2017,
    "zielony"
);

console.log(auto1);
console.log(kolekcjaAut);