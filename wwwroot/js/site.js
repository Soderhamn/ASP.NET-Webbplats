// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*Skript för att slumpa fram "Välkommen" på ett av följande språk: Svenska, finska, engelska, spanska, tyska och franska */

"use strict";

//Läs in element
const welcomeEl = document.getElementById("welcomeEl");

//Händelsehanterare
window.onload = randLangWelcome(); //När hela sidan laddats körs funktionen

//Funktioner
function randLangWelcome() { //Skriv ut välkommen på ett framslumpat språk
    let welcomeArr = ["Välkommen", "Tervetuloa!", "Welcome!", "Bienvenido!", "Willkommen!", "Bienvenue!"];

    let randNr = getRandInt(0, 5);

    welcomeEl.innerText =  welcomeArr[randNr]; //Returnerar slumpmässig textsträng
}

//Slumpar fram slumpmässig integer enligt följande exempel: https://www.w3schools.com/JS/tryit.asp?filename=tryjs_random_function2
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}