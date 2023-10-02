/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

Number (Numero): Puoi usare i numeri per fare calcoli matematici come l'addizione e la sottrazione, oppure la moltiplicazione e la divisione.

String (Stringa): Ogni stringa è una lettera o un numero e puoi usarle per creare parole o frasi. Ad esempio, "cane" è una stringa.

Boolean (Booleano): Un booleano può essere vero (acceso) o falso (spento). Ad esempio, "Il sole è caldo" potrebbe essere vero, mentre "La luna è un formaggio" è falso.

Array: Un array è come una scatola di giocattoli con molti scomparti. Puoi mettere diversi oggetti in ciascun scomparto e poi prenderli quando vuoi. Ad esempio, potresti avere un array di nomi di amici.

Object (Oggetto): Ogni oggetto ha un nome e delle caratteristiche. Ad esempio, un oggetto "auto" potrebbe avere un nome come "Ferrari" e caratteristiche come il colore e la velocità.

Null (Nullo): Null è come una scatola vuota. Non c'è niente dentro, ma puoi metterci qualcosa in futuro se vuoi.

Undefined (Non definito): Una variabile è "non definita" quando non è stata assegnata alcun valore o quando è stata dichiarata ma non è stata inizializzata con un valore.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var nome = "Lorenzo"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var numero1 = 12;
var numero2 = 20;

var risultato = numero1 + numero2;

console.log(risultato);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = "Lorenzo";  // Dichiaro la variabile "name" con il valore "Lorenzo"
name = "Tuo Cognome";  // Riassegno un nuovo valore alla variabile "name" (il tuo cognome)
console.log(name);     // Stampo il nuovo valore

const nome = "Lorenzo";  // Dichiaro la variabile "nome" con il valore "Lorenzo"
nome = "Tuo Cognome";    // Tentativo di riassegnare un nuovo valore a una variabile "const"
console.log(nome);       // Questo genererà un errore

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var x = 12;  // Dichiaro la variabile "x" e le assegno il valore 12
var risultato = 4 - x;  // Eseguo la sottrazione tra 4 e il valore di "x"
console.log(risultato);  // Stampo il risultato

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";

// Verifica che name1 sia diverso da name2
if (name1 !== name2) {
  console.log("name1 e name2 sono diversi.");
} else {
  console.log("name1 e name2 sono uguali.");
}

// Verifica che la loro uguaglianza diventi true se trasformate entrambe in minuscolo
if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log("Dopo la trasformazione in minuscolo, name1 e name2 diventano uguali.");
} else {
  console.log("Dopo la trasformazione in minuscolo, name1 e name2 rimangono diversi.");
}
