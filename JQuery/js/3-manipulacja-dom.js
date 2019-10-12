
//Pobieranie tekstu
let tekstParagrafuPierwszego = $("#paragraf").text();
console.log(tekstParagrafuPierwszego);

//Dodawanie tekstu
$(".paragraf").eq(1).text("Ala ma kota");


//Dodawanie HTML
$(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br> HTML");

//Dodawanie treści na końcu selektora
$(".paragrafnext").append("Treść na końcu selektora");

//Dodawanie treści za selektorem
$(".paragrafnext").after("Treść za selektorem");

$(".paragrafnext").prepend("Treść na początku selektora");

$(".paragrafnext").before("Treść przed selektorem");


//Usuwanie elementu i jego zawartości
$("strong").remove();

//Usuwanie TYLKO jego zawartości
$(".paragraf").empty();

//Dodawanie CSS
//$(".paragrafnext").css("color", "blue");
$(".paragrafnext").css({ 'font-size': '3em' , 'color': 'red' });

$("input#imie").val("Karolina");

//Dodawanie klasy
$("h1").addClass("blue");

//Dodawanie atrybutu
$("h1").attr("imie", "Marcin");