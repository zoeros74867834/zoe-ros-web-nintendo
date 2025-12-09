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

