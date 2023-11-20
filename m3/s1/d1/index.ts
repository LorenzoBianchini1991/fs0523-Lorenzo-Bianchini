function guessTheNumber(player1: number, player2: number): string {
    // Genera un numero casuale tra 1 e 100
    let random_number = Math.floor(Math.random() * 100) + 1;

    // Calcola la differenza tra il numero dei giocatori e il numero casuale
    let diff_player1 = Math.abs(random_number - player1);
    let diff_player2 = Math.abs(random_number - player2);

    // Controlla chi si è avvicinato di più o ha azzeccato il numero
    if (player1 === random_number) {
        return `Numero casuale generato = ${random_number}\nIl giocatore 1 ha azzeccato il numero!`;
    } else if (player2 === random_number) {
        return `Numero casuale generato = ${random_number}\nIl giocatore 2 ha azzeccato il numero!`;
    } else if (diff_player1 < diff_player2) {
        return `Numero casuale generato = ${random_number}\nNessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!`;
    } else if (diff_player2 < diff_player1) {
        return `Numero casuale generato = ${random_number}\nNessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!`;
    } else {
        return `Numero casuale generato = ${random_number}\nEntrambi i giocatori si sono avvicinati allo stesso modo al numero!`;
    }
}

// Esempio di utilizzo della funzione
console.log(guessTheNumber(5, 10));
