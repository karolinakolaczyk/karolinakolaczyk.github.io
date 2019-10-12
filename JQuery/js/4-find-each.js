
$(function() {
'use strict';



//Wybieranie elementu z kolekcji za pomocą metody eg()
$('body').find('p').eq(2).css({'color': 'green'});

//pętla each dodająca do paragrafów klasę z kolejnym numerem
$("p").each(function(index) {
    $(this).addClass("paragraf-" + index);
    console.log(jQuery(this));
});



});