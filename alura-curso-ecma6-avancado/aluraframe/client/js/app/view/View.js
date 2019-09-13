class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        throw new Error('template() deve ser implementado.')
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}