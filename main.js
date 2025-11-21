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

document.getElementById("btn-genera").addEventListener("click", function(e) {

    e.preventDefault(); //impedisce il refresh del form - verificare perchè fa refresh cmq


    const distanzaElemento = document.getElementById("distanza");
    const etaElemento = document.getElementById("eta");
    const prezzoPienoElemento = document.getElementById("prezzo-pieno");
    const scontoElemento = document.getElementById("sconto");
    const PrezzoScontatoElemento = document.getElementById("prezzo-scontato");

    if (eta < 18) {
        prezzoFinale = prezzoBiglietto * 0.80;
    }
    else if (eta >= 65) {
        prezzoFinale = prezzoBiglietto * 0.60;
    }
    else {
        prezzoFinale = prezzoFinale;
    }

}