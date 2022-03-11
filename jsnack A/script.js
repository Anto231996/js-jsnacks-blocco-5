/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */


const player =
{
    codiceGiocatore: "",
    nome: "James",
    cognome: "Harden",
    eta: "32",
    mpp: "",
    p3p  :""
}

player.codiceGiocatore = generatePlayCode();
player.mpp = Math.floor(Math.random() * ((50 + 1) - 0) + 0);
player.p3p = Math.floor(Math.random() * ((100 + 1) - 0) + 0);


function generatePlayCode(){
    return charactersPlayerCode(3) + numberPlayerCode(3);
}


function charactersPlayerCode(length){
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVZWXY";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));   
    }

    return result;
}

function numberPlayerCode(length){
    let result = "";
    let characters = "123456789"
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));   
    }

    return result;
}


console.table(player)