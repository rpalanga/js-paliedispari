
// L’utente sceglie pari o dispari.

// Inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


let userChoice; 
let eRRor = false;

do {

    userChoice = Number(prompt("Inserisci un numero da 1 a 5")) ;

    if (userChoice < 1 || userChoice > 5) {

        alert("Inserisci un altro Numero");

    } else {

        eRRor = true;
        

    }

    
    
} while (eRRor !== true )



function pcNumber (){

    let randomNumber = Math.floor(Math.random()* 5) + 1;
    

    return randomNumber;

}


let pcChoice = pcNumber()

// console.log(pcChoice)






    
    
