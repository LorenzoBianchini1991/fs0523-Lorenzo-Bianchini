/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    var area_rettangolo = l1 * l2;
    return area_rettangolo;
}

            /*
            var l1 = 7
            var l2 = 12
            console.log(area(7,12))
            */


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
}

            /*
            var numero1 = 11
            var numero2 = 11
            console.log(crazySum(11, 11))
            

            var numero1 = 11
            var numero2 = 12
            console.log(crazySum(11, 12))
            */


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    var differenza = Math.abs(numero - 19);
  
    if (numero > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
}

            /*
            var numero = 15;
            console.log(crazyDiff(15)); 
           

            var numero = 25;
            console.log(crazyDiff(25)); 
            */


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
  }

            /*
            var n = 30
            console.log(boundary(30))
            

            var n = 150
            console.log(boundary(150))
            */


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
    if (string.startsWith("EPICODE")) {
      return string;
    } else {
      return "EPICODE" + string;
    }
  }
            
            /*
            console.log(epify("Lorenzo"))


            console.log(epify("EPICODE"))
            */


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  if (numero > 0) {
    if (numero % 3 === 0 || numero % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false; 
  }
}
                /*
                console.log(check3and7(6))

                console.log(check3and7(28))

                console.log(check3and7(4))
                */


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
    return string.split("").reverse().join("");
}
                
                /*
                console.log(reverseString("EPICODE"))
                */


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
    var parole = string.split(" ");
        for (var i = 0; i < parole.length; i++) {
        parole[i] = parole[i][0].toUpperCase() + parole[i].substring(1);
        }
    return parole.join(" ");
}

                /*
                console.log(upperFirst("ciao mi chiamo lorenzo"));
                */


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  if (string.length >= 2) {
    return string.slice(1, -1);
  } else {
    return "";
  }
}
                /*
                console.log(cutString("Lorenzo"));
                */


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  var nCasuali = [];
  for (var i = 0; i < n; i++) {
    var nCasuale = Math.floor(Math.random() * 11);
    nCasuali.push(nCasuale);
  }
}
                /*
                console.log(giveMeRandom(9)); 
                console.log(giveMeRandom(13));
                */