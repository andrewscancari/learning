class Conta {
    constructor(saldo) {
        if(/^\d$/.test(saldo)) throw new Error('O saldo deve ser um valor númerico');

        this._saldo = saldo;
    }

    atualiza(taxa) {
        throw new Error('O metodo atualiza deve ser implementado por uma classe filha');
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }
}