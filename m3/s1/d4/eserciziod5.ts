// struttura dei dati
type AbbigliamentoData = {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
};

// proprietà capo abbigliamento pubbliche o private
class CapoDiAbbigliamento {
    private id: number;
    private codprod: number;
    private collezione: string;
    public capo: string;
    private modello: number;
    private quantita: number;
    private colore: string;
    private prezzoIvaEsclusa: number;
    private prezzoIvaInclusa: number;
    private disponibile: string;
    private saldo: number;

    // chiamata al costruttore
    constructor(data: AbbigliamentoData) {
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
    getSaldoCapo(): number {
        return this.prezzoIvaInclusa * this.saldo / 100;
    }

    // calcolo del prezzo finale dopo l'applicazione dello sconto
    getAcquistoCapo(): number {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    }
}

// Funzione per recuperare i dati dall'API
async function fetchAbbigliamento(uri: string): Promise<CapoDiAbbigliamento[]> {
    const response = await fetch(uri);
    const data: AbbigliamentoData[] = await response.json();

    return data.map(item => new CapoDiAbbigliamento(item));
}

const uri = 'http://localhost:3000/abbigliamento';
fetchAbbigliamento(uri).then(abbigliamento => {
    abbigliamento.forEach(capo => {
        console.log(`Il costo totale del capo "${capo.capo}" dopo lo sconto è: €${capo.getAcquistoCapo().toFixed(2)}`);
    });
});
