const ustawTlo = () => {
    document.getElementById("blue").style.backgroundColor = "blue";
    document.getElementById("violet").style.backgroundColor = "violet";
}

const kolorki = document.querySelector(".btn");
kolorki.addEventListener("click", ustawTlo);

const formularz = document.querySelector("#formularz");
    formularz.addEventListener("submit", (callback) => {
        callback.preventDefault();
        let imie = document.querySelector("[name='fname']").value;
        let nazwisko = document.querySelector("[name='lname']").value;

        if(imie == "" || nazwisko == "") {
            wiadomosc = `Niepoprawnie wypełniony formularz. Prosimy o poprawę`;
        }
        
        document.querySelector(".message").innerHTML = wiadomosc;


    });




// const btn = document.getElementsByTagName("button")[0];
//const p = document.getElementsByTagName("p");

//const ustawTlo = () => {
   // p[0].style.backgroundColor = "red";
   //p[1].style.backgroundColor = "yellow";
   //}