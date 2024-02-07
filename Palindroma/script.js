
// Chiedere all’utente di inserire una parola.

// Creare una funzione per capire se la parola inserita è palindroma

// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, 

// farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)




function check(string) {

    // trova la lunghezza della parola
    const lunghezza = string.length;

    
    for (let i = 0; i < lunghezza / 2; i++) {

        
        if (string[i] !== string[lunghezza - 1 - i]) {
            return 'Non è palindroma';
        }
    }
    return 'La parola è palindroma';
}


const string = prompt('Inserisci una parola');


const value = check(string);

console.log(value);

document.getElementById("result").innerHTML = `${value}`