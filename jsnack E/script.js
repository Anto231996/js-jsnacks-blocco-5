/**
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */
const puoiGuidare = []
const nonPuoiGuidare = []
const people = [
   {
      firstName: 'Wayne',
      lastName: 'Barnett',
      age: '21',
   },

   {
      firstName: 'Angela',
      lastName: 'Caroll',
      age: '17',
   },

   {
      firstName: 'Walter',
      lastName: 'Gordon',
      age: '127',
   },

   {
      firstName: 'Angela',
      lastName: 'Lopez',
      age: '16',
   },

   {
      firstName: 'Scott',
      lastName: 'Estrada',
      age: '44',
   },

   {
      firstName: 'Barbara',
      lastName: 'Ramos',
      age: '89',
   }
];


const maggiorenne = people.filter((element) =>{
   if (element.age >= 18 ) return true;

})

puoiGuidare.push(maggiorenne);

const minorenne = people.filter((element) =>{
   if (element.age < 18 ) return true;
})

nonPuoiGuidare.push(minorenne);



console.table(maggiorenne);
console.table(minorenne);

console.table(puoiGuidare)
console.table(nonPuoiGuidare)