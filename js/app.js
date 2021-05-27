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

