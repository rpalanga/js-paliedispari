
// L’utente sceglie pari o dispari. V

// Inserisce un numero da 1 a 5. V

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). V

// Sommiamo i due numeri V

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) V

// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

function pcNumber (){

    let randomNumber = Math.floor(Math.random()* 5) + 1;
    

    return randomNumber;

}

function add (a,b){
     
    let sum = a + b;
    
    return sum
}


function check (sumElement) {

    if (sumElement % 2 == 0){
        return "pari"
        console.log("il numero è pari")

    } else {
        return "dispari"
        console.log("il numero è dispari")

    }
}


// scelta utente
let userChoice; 
console.log("scelta dell'utente"+ userChoice)

// scelta randomica computer
let pcChoice = pcNumber();
console.log("Scelta computer" + pcChoice)

// valutere se la somma degli elementi è pari o dispari
let Result = check (sumElement);

// pari o dispari
let DorP ;
let errorCicle = true;

do {

    userChoice = Number(prompt("Inserisci un numero da 1 a 5")) ;

    if (userChoice < 1 || userChoice > 5) {

        alert("Inserisci un altro Numero");

    } else {

        errorCicle = false;
        

    }

    
    
} while (errorCicle !== false )

// somma degli elementi 
let sumElement = add(pcChoice, userChoice);
console.log( "questa è la somma" + sumElement)


// controllo sulle parole inserite

while  (!(DorP === "pari" || DorP === "dispari"))  {

    DorP = prompt("Inserisci Pari o Dispari") ;

    if (!(DorP === "pari" || DorP === "dispari")){
        alert("inserisci la parola pari o dispari")
    }

}

console.log(DorP)























    
    
