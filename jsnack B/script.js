/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */

const car = [
    {
       marca: "",
       modello: "",
       alimentazione:"benzina"
    },

    {
        marca: "",
        modello: "",
        alimentazione:"diesel"
    },

    {
        marca: "",
        modello: "",
        alimentazione:"gpl"
    },

    {
        marca: "",
        modello: "",
        alimentazione:"elettrico", 
    },

    {
        marca: "",
        modello: "",
        alimentazione:"metano"
    },
    
    {
        marca: "",
        modello: "",
        alimentazione:"benzina"
    },
 
    {
         marca: "",
         modello: "",
         alimentazione:"diesel"
    },
 
    {
         marca: "",
         modello: "",
         alimentazione:"gpl"
    },
 
    {
         marca: "",
         modello: "",
         alimentazione:"elettrico", 
    },
 
    {
         marca: "",
         modello: "",
         alimentazione:"metano"
    },
    
    {
        marca: "",
        modello: "",
        alimentazione:"elettrico", 
    },

    {
        marca: "",
        modello: "",
        alimentazione:"metano"
    }
]

const carBenzina = car.filter((element)=>{
    if (element.alimentazione == "benzina")
    return true
})

const carDiesel = car.filter((element)=>{
    if (element.alimentazione == "diesel")
    return true
})

const restCar = car.filter((element)=>{
    if (element.alimentazione !== "benzina" && element.alimentazione !== "diesel")
    return true
})


console.table(carBenzina);
console.table(carDiesel);
console.table(restCar);