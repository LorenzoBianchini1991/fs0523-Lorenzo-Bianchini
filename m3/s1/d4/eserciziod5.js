"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// proprietà capo abbigliamento pubbliche o private
class CapoDiAbbigliamento {
    // chiamata al costruttore
    constructor(data) {
        this.id = data.id;
        this.codprod = data.codprod;
        this.collezione = data.collezione;
        this.capo = data.capo;
        this.modello = data.modello;
        this.quantita = data.quantita;
        this.colore = data.colore;
        this.prezzoIvaEsclusa = data.prezzoivaesclusa;
        this.prezzoIvaInclusa = data.prezzoivainclusa;
        this.disponibile = data.disponibile;
        this.saldo = data.saldo;
    }
    // calcolo dello sconto
    getSaldoCapo() {
        return this.prezzoIvaInclusa * this.saldo / 100;
    }
    // calcolo del prezzo finale dopo l'applicazione dello sconto
    getAcquistoCapo() {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    }
}
// Funzione per recuperare i dati dall'API
function fetchAbbigliamento(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(uri);
        const data = yield response.json();
        return data.map(item => new CapoDiAbbigliamento(item));
    });
}
const uri = 'http://localhost:3000/abbigliamento';
fetchAbbigliamento(uri).then(abbigliamento => {
    abbigliamento.forEach(capo => {
        console.log(`Il costo totale del capo "${capo.capo}" dopo lo sconto è: €${capo.getAcquistoCapo().toFixed(2)}`);
    });
});
