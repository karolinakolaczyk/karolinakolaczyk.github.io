$(function() {
    'use strict';

    //pojedyncze zdarzenie na paragrafie
    $("p").click(function() {
        $(this).css("color", "orange");
    });

//grupa zdarzeń na nagłówku
$("h1").on({
    "click": function () {
        $(this).css("color", "orange");
    },
    "mouseleave" : function () {
        $(this).css("color", "inherit");
    },
    "dblclick" : function () {
        $(this).css("color", "red");
    },
});













});