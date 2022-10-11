
// const element = document.getElementsById("btn");
const element = document.getElementById("btn");
element.addEventListener("click", calcoloBiglietto);

function calcoloBiglietto(){
    let km = parseInt(document.getElementById("km").value);
    let eta = parseInt(document.getElementById("eta").value);
    let costoKilometri = (km * 0.21);
    console.log('km inseriti: '+km);
    console.log('eta user: '+eta);
    console.log('costo: '+costoKilometri);
    if(eta<18){
        costoKilometri = costoKilometri - ((20 / 100) * costoKilometri);
        console.log('sconto 20');
        console.log('costo biglietto scontato: '+costoKilometri);
    }
    else if(eta>65){
        costoKilometri = costoKilometri - ((40 / 100) * costoKilometri);
        console.log('sconto 40');
        console.log('costo biglietto scontato: '+costoKilometri);
    }
    costoKilometri = (costoKilometri).toFixed(2);
    console.log('costo biglietto 2 cifre dopo la virgola: '+ costoKilometri);

    const costoBiglietto = `
        ${costoKilometri}&euro;
    `
    const elementoCosto = document.getElementById('prezzo');
    elementoCosto.innerHTML = costoBiglietto;

    const kilometriInseriti = `
        ${km} km
    `
    const elementoKilometri = document.getElementById('kilometri');
    elementoKilometri.innerHTML = kilometriInseriti;
}