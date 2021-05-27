//Recuperiamo le informazioni dei km
var inputKm = prompt('Inserisci solo il numero di Km che vuoi percorrere');

//modifichiamo se l'utente ha inserito , al posto del . 
kmUser = + inputKm.replace(',','.');

if(isNaN(kmUser)){
    alert('Hai inserito un valore non valido, assicurati di mettere solo il numero dei km, riprova');
    window.location.reload();
}

//Recuperiamo l'informazione degli anni dell'utente
var inputYears = parseInt(prompt('Inserisci i tuoi anni per vedere se puoi usufruire dello sconto'));

var price = 0.25; //prezzo al km
var subPrice = kmUser * price; //Prezzo totale del biglietto in base i km

var message;
var discount = 0;

//Controllo sullo sconto del biglietto
if(inputYears < 18){
    discount = 20;
    message = `+ ricevi lo sconto del ${discount}% perchè sei minorenne`;
} else if(inputYears >= 65){
    discount = 40;
    message = `+ ricevi lo sconto del ${discount}% perchè sei over 65`;
}

discount *= subPrice / 100;

var totalPrice = subPrice - discount;

document.getElementById('ticketPrice')
.innerHTML += ` ${totalPrice.toFixed(2)} euro ${discount ? message : ''}`;