class Negociacao {
    constructor(data, quantidade, valor) {
        // Proteger propriedade data de acesso externo, 
        // pois o freeze é shallow e não congela objeto dentro de objeto
        this._data = new Date(data.getTime());
        
        this._quantidade = parseInt(quantidade);
        this._valor = parseFloat(valor);

        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}