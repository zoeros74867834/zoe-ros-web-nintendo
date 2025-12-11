/* Met uitleg hulp van Ali */
// JavaScript Document
// Alle functies hebben deze haakje ()
//je hebt constant daar blijft de waarde altijd gelijk
//en bij let kan de waarde wel verandere achter const zet je een logische naam en de = waar je naar toe verwijst
// Queryselector die is een functie die zoek naar een element in de html hij zoek dus naar jouw vraag en die doe je tussen je haakjes
// Met het groter dan teken ">" verwijs je naar de direct child binnen een parent.
// Om een functie te schrijven in javavscript begin je altijd met function

console.log("hi");

const burger = document.querySelector("header nav > button");
let menuItem = document.querySelector("header nav:nth-of-type(2)")

//let 
// Altijd een funtie een naam geven
//Dus item staat voor place holder voor voor de functie die we later gaan gebruiken 
// Camelcase betekent dat je de eerste in het tweede woord in kapitaal schrijft
// openBurger is een functie aanroepen
// addEventListner voegt een gebeurtenis toe aan je element wat voor nu burger is
// als je twee woorden heb dan heet dat camelcase 
function openBurger(item){
    item.classList.toggle("open")
}
burger.addEventListener("click", function(){
    openBurger(menuItem)
    console.log('hij klikt');
});
/* 
1. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-column
  2. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-auto-rows
  3. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-auto-rows
  4. https://www.accessibility.nl/kennis/zo-zet-je-skiplinks-voor-een-optimale-navigatie
  5. https://dlo.mijnhva.nl/content/enforced/690110-FDMCI-CRS-00042507/FED%2025-26%20-%20Blok%202%20-%20Oefening%20typografie%20-%201%20letters.pdf
  6. https://fonts.google.com/specimen/Alegreya
  7. https://codepen.io/psbwhznu-the-scripter/pen/ogxxjdV
  8. https://codepen.io/psbwhznu-the-scripter/pen/yyOyYPw
  9. https://codepen.io/psbwhznu-the-scripter/pen/XJddjJy
  10.https://codepen.io/psbwhznu-the-scripter/pen/XJddYGp 
  11. https://codepen.io/psbwhznu-the-scripter/pen/wBGJGQd
  12. https://codepen.io/psbwhznu-the-scripter/pen/JoXJNYO
  13. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timing-function
  14. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-fill-mode
  15.https://codepen.io/shooft/pen/KwdZPMP
  16. https://codepen.io/shooft/pen/XJmEOyb
  17. https://flexboxfroggy.com/#nl
  18. https://codepen.io/shooft/pen/MYaXoza
*/
