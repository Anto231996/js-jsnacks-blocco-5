/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */


const nomi = ['pippo', 'PLUTO', 'Paperino'];





const nomiCorretti = nomi.map((element) => {
  return element.charAt(0).toUpperCase() + 
  element.substring(1).toLowerCase();
});

console.log(nomiCorretti);