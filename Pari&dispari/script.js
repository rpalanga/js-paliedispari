
// L’utente sceglie pari o dispari.

// Inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


let userChoice ;

function userNumber (Numero){
    
    if (Numero % 2 == 0){

        return "pari";
    } else {

        return "dispari";
    }

}
console.log(Numero())

function pcNumber (Numerodue){

    let randomNumber = Math.floor(Math.random()* 5) + 1;
    
    if (Numerodue % 2 == 0){

        return "pari";

    } else {

        return "dispari"
    }

}

console.log(Numerodue())





    
    
