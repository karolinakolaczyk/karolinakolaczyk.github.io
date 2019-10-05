let osobaOb = {
imie: "Adam" ,
plec: "M" ,
wiek: 36,
zawod: "programista" ,
przedstawSie: function() {
    return `Cześć, jestem ${this.imie} i mam ${this.wiek} lat. Zawód wykonywany to: ${this.zawod}`;

}
};

console.log(osobaOb.imie, osobaOb["imie"]);

let wynikDzialaniaMetody = osobaOb.przedstawSie();
console.log(wynikDzialaniaMetody);