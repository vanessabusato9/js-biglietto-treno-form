/*const km = parseInt(prompt("Quanti km vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));
const prezzoBiglietto = km * 0.21;
let prezzoFinale = prezzoBiglietto;

console.log(km);
console.log(eta);

if (eta < 18) {
    prezzoFinale = prezzoBiglietto * 0.80;
}
else if (eta >= 65) {
    prezzoFinale = prezzoBiglietto * 0.60;
}
else {
    prezzoFinale = prezzoFinale;
}

console.log(prezzoFinale);
document.getElementById("totale").innerText = `il prezzo Finale è ${prezzoFinale.toFixed(2)}`;*/

document.getElementById("btn-genera").addEventListener("click", function (e) { //seleziona il bottone e aggiunge un ascoltatore che esegue la funzione 

    e.preventDefault(); //impedisce il refresh del form - verificare perchè fa refresh cmq

    //salva elementi pagina html
    const distanzaElemento = document.getElementById("distanza");
    const etaElemento = document.getElementById("eta");
    const prezzoPienoElemento = document.getElementById("prezzo-pieno");
    const scontoElemento = document.getElementById("sconto");
    const PrezzoScontatoElemento = document.getElementById("prezzo-scontato");

    const costoAlKm = 0.21; //prezzo x km
    const distanzaKm = parseInt(distanzaElemento.value); //trasforma il valore dell'input in numero

    console.log(distanzaKm);

    const tariffaBase = distanzaKm * costoAlKm; //imposta il prezzo al km
    let prezzoFinale = 0;

    if (etaElemento.value === "Minorenne") {
        prezzoFinale = tariffaBase * 0.20;
    }
    else if (etaElemento.value === "Over-65") {
        prezzoFinale = tariffaBase * 0.40;
    }
    else if (etaElemento.value === "Maggiorenne") {
        prezzoFinale = tariffaBase;
    }


    prezzoPienoElemento.textContent = `${prezzoFinale.toFixed(2)} €`;
});