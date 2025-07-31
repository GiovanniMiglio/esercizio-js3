let num1 = 1;
console.log( num1);
let num2 = 2;
console.log( num2);
let stringa = `5`;
console.log( stringa);
stringa = `6`
console.log(stringa);
const PIGREGO = 3.14159265359;
console.log(PIGREGO);


// esercizio2//
let a = 10, b = 20, c = 30, d = 40, e = 50; 
let  somma =  a + b + c +d + e ;
let frase1 = "La somma tra i numeri equivale a";
console.log( frase1, ( somma));
let media = (a + b + c + d+ e) / 5;
let frase2 = "e la media equivale a";
console.log( frase2, (media));

// esercizio3//
let annoc = 2025, annodn=1989;
let diff = annoc - annodn;
let annim = (annodn + 100) - annoc;
let frase3 = `Hai  ${diff} anni` ; frase4 = ` e ti mancano  ${annim} anni per compierne 100`
console.log(frase3, frase4);

/*esercizio
let num3 = prompt( " perfavore inserisci un numero:", "numero");
let num4 = prompt( " perfavore inserisci un altro numero:", "numero")
let num5 = Number(num3); 
let num6 = Number(num4);
let somma1 = Number(num5 + num6); Number( sottrazione = num5 - num6); Number( moltiplicazione = num5 * num6);   Number(divisione = num5 / num6); Number( potenza= num5 ** num6);
let frase5 = `Con i numeri da te scelti, i risultati delle varie operazioni sono: somma ${ somma1} , sottrazione ${sottrazione} , moltiplicazione ${ moltiplicazione} , divisione ${ divisione} , potenza ${ potenza} ,`; 
console.log(frase5);*/

//esercizio5//
let numgatti = 67;
let numgattifila = 5;
let filetot = numgatti / numgattifila;
let filetot1= Math.floor(filetot);
let resto= numgatti % numgattifila;
let mancanti = numgattifila - resto;
let frase6 = `Ci sono ${ filetot1} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${resto}`;

console.log(frase6);


