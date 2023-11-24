// interfaccia SIM

interface Sim {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
}

// classe SMARTPHONE

class Smartphone implements Sim {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number = 0.20;
    registroChiamate: { id: number; durata: number; dataOra: string; }[];

    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }

    ricarica(euro: number): void {
        this.carica += euro;
    }

    numero404(): string {
        return `Credito residuo: €${this.carica.toFixed(2)}`;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    chiamata(min: number): void {
        const costo = min * this.costoMinuto;
        if (this.carica >= costo) {
            this.carica -= costo;
            this.numeroChiamate++;
            const dataOra = new Date();
            const dataOraFormattata = dataOra.toISOString().replace(/:\d+\.\d+Z$/, ':00Z');
            this.registroChiamate.push({
                id: this.numeroChiamate,
                durata: min,
                dataOra: dataOraFormattata
            });
        }
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

    mostraRegistroChiamate(): void {
        console.log(this.registroChiamate);
    }

    filtraChiamatePerDataOra(dataOra: string): void {
        console.log(this.registroChiamate.filter(chiamata => chiamata.dataOra.startsWith(dataOra)));
    }
}

// ISTANZE

let smartphone1 = new Smartphone();
let smartphone2 = new Smartphone();
let smartphone3 = new Smartphone();


// TEST DELLE VARIE FUNZIONALITA

// SMARTPHONE 1

// Ricarica e verifica del credito residuo
smartphone1.ricarica(10);
console.log(smartphone1.numero404());

// Effettua alcune chiamate
smartphone1.chiamata(2);
smartphone1.chiamata(4);

// Verifica il numero delle chiamate e il credito residuo
console.log(smartphone1.getNumeroChiamate());
console.log(smartphone1.numero404());

// Visualizza il registro delle chiamate
smartphone1.mostraRegistroChiamate();

// Azzera le chiamate e verifica di nuovo
smartphone1.azzeraChiamate();
console.log(smartphone1.getNumeroChiamate());


// SMARTPHONE 2

// Ricarica e verifica del credito residuo
smartphone2.ricarica(15);
console.log(smartphone2.numero404());

// Effettua alcune chiamate
smartphone2.chiamata(5);
smartphone2.chiamata(3);

// Verifica il numero delle chiamate e il credito residuo
console.log(smartphone2.getNumeroChiamate());
console.log(smartphone2.numero404());

// Visualizza il registro delle chiamate
smartphone2.mostraRegistroChiamate();

// Azzera le chiamate e verifica di nuovo
smartphone2.azzeraChiamate();
console.log(smartphone2.getNumeroChiamate());


// SMARTPHONE 3

// Ricarica e verifica del credito residuo
smartphone3.ricarica(30);
console.log(smartphone3.numero404());

// Effettua una chiamata lunga
smartphone3.chiamata(20);

// Verifica il numero delle chiamate e il credito residuo
console.log(smartphone3.getNumeroChiamate());
console.log(smartphone3.numero404());

// Visualizza e filtra il registro delle chiamate
smartphone3.mostraRegistroChiamate();

// Filtra per una data specifica
smartphone3.filtraChiamatePerDataOra("2023-11-24T12:00");

// Azzera le chiamate
smartphone3.azzeraChiamate();