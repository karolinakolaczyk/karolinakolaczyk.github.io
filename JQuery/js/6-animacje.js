$(function() {
   'use strict';


    //Efekt hide i show
// $("p").hide(3000).show(3000);


// //Efekt fadeOut i fadeIn
// $("h1").fadeOut(3000).fadeIn(3000);

// //Efekt slideUp i slideDown
// $("h2").slideUp(3000).slideDown(3000);

//Efekt animacji z funkcją zwrotną animacji
// $("h3").animate({"font-size": "3em", "margin-left": "100px"}, 2000, koniecAnimacji);

// //Funkcja zwrotna animacji - tzw. callback
// function koniecAnimacji () {
//     console.log("zakończono pierwszą animacje. Zaraz startuje druga :)");
//     //alert("koniec");
//     $("h3").animate({"font-size": "1em", "margin-left": "0px"},2000);
// }

//Dwie animacje
// $( "#effect" ).animate({
 //   backgroundColor: "#aa0000",
 //   color: "#fff",
 //   width: 500
 // }, 1000 );


 //function kolorAnimacji () {
        //  $("h2").animate({ "backgroundColor": "#aa0000", "color": "#fff", "width": 500, }, 2000, kolorAnimacji);
        //};
        //$("h2").animation(function() {
            //$(this).css("color", "orange");
        //});

        

    // $("h2").animate({"font-size": "4em", "margin-left": "150px"}, 2000);
    function koniecAnimacji2 () {
        console.log("koniec animacji");
        
        $("h2").animate({"color": "pink"}, 2000);
        
    
    }; 
    $("h2").animate({"font-size": "3em", "margin-left": "100px"}, 2000, koniecAnimacji2);

});