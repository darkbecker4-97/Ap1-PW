$(document).ready(function(){


    $("article").load('home.html');

    $("#about").clik(function(){
        $("article").load('about.html');
    });

    $("#home").clik(function(){
        $("article").load('home.html');
    });

});