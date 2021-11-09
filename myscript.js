// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Visualizzare in pagina 5 numeri casuali.
// 1 creo un array di 5 numeri casuali
// 2 stampo nell'html i numeri

const  numeriRandom = [];
while(numeriRandom.length < 5) {
    // creo un generatore di numeri random da 0 a 50
    const genNumeri = Math.floor(Math.random() * 100) + 1;
    // creo una variante booleana per escludere dal ciclo i numeri già presenti nell'array
    let trovato = false;
    // controlla se il numero generato è già presente nell'array
    for(i = 0; i < numeriRandom.length; i++){
        if (genNumeri === numeriRandom[i]){
            trovato = true;
        }
    }
    // // stampo in console i numeri generati dal ciclo 
    if (trovato == false){
        numeriRandom.push(genNumeri);
    }
}
console.log(numeriRandom);
const numeri = document.getElementById("numeri_casuali");

numeri.innerHTML = numeriRandom


// Da lì parte un timer di 30 secondi.
// 1 creo un timer di 30 sec dove collegherò la mia funzione con dentro i comandi
// nella funzione chiederò all'utente di inserire i numeri che compaione nella schermata e farò sparire i numeri
// controllo che quei numeri sono presinti nell'array di numeri generati
// se sono presenti li ristampo nell'html

setTimeout(hiddenNumeri, 30000);

function hiddenNumeri () {
    numeri.classList.add("hidden");
}


setTimeout(richiesta, 30100);

const scelta = [];

function richiesta () {    
    for(i = 0; i <5 ; i++){
        const numInseriti = parseInt(prompt("inserisci uno dei 5 numeri"));
        // scelta.push(numInseriti)
        // controlla se il numero digitato è già presente nell'array
        let trovato = false;

        for(let j = 0; j < numeriRandom.length; j++){
            if (numInseriti === numeriRandom[j]){
                trovato = true;
            }   
        }

        if (trovato == true){
            scelta.push(numInseriti);
        }
    
        console.log(scelta);
        numeri.innerHTML = scelta
        numeri.classList.remove("hidden");
    }
    
}

