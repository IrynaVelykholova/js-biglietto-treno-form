const userNameInput = document.querySelector("[name=username]");
const kmInput = document.querySelector("[name=km]");
const ageInput = document.querySelector("[name=age]");
const btnGenera = document.querySelector(".btn_genera");
const btnAnnulla = document.querySelector(".btn_annulla");



//Aggiunta event listener
btnGenera.addEventListener("click", function () {
    //codice che verrà eseguito SOLO quando l'utente clicca
    const username = userNameInput.value;
    const kilometres = kmInput.value;
    const age = ageInput.value;
    const costo = parseInt(kilometres) * 0.21;
    if (age < 18) {
        document.getElementById("prezzo").innerHTML = (costo - (costo * 20) / 100 ).toFixed(2);
    } else if (age >= 65) {
        document.getElementById("prezzo").innerHTML = (costo - (costo * 20) / 100 ).toFixed(2);
    } else {
        document.getElementById("prezzo").innerHTML = costo.toFixed(2);
    }
    document.getElementById("name").innerHTML = username;
})

