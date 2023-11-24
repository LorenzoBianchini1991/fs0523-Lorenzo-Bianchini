class Smartphone {
    constructor() {
        this.costoMinuto = 0.20;
        this.carica = 0;
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: €${this.carica.toFixed(2)}`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
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
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        console.log(this.registroChiamate);
    }
    filtraChiamatePerDataOra(dataOra) {
        console.log(this.registroChiamate.filter(chiamata => chiamata.dataOra === dataOra));
    }
}
// ISTANZE
let smartphone1 = new Smartphone();
let smartphone2 = new Smartphone();
let smartphone3 = new Smartphone();

// SMARTPHONE 1

smartphone1.ricarica(10);
console.log(smartphone1.numero404());

smartphone1.chiamata(2);
smartphone1.chiamata(4);

console.log(smartphone1.getNumeroChiamate());
console.log(smartphone1.numero404());

smartphone1.mostraRegistroChiamate();

smartphone1.azzeraChiamate();
console.log(smartphone1.getNumeroChiamate());

// SMARTPHONE 2

smartphone2.ricarica(15);
console.log(smartphone2.numero404());

smartphone2.chiamata(5);
smartphone2.chiamata(3);

console.log(smartphone2.getNumeroChiamate());
console.log(smartphone2.numero404());

smartphone2.mostraRegistroChiamate();

smartphone2.azzeraChiamate();
console.log(smartphone2.getNumeroChiamate());

// SMARTPHONE 3

smartphone3.ricarica(30);
console.log(smartphone3.numero404());

smartphone3.chiamata(20);

console.log(smartphone3.getNumeroChiamate());
console.log(smartphone3.numero404());

smartphone3.mostraRegistroChiamate();

smartphone3.filtraChiamatePerDataOra("2023-11-24T12:00:00.000Z");

smartphone3.azzeraChiamate();
