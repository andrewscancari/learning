class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        this._arquivo = new Arquivo(...this._inputDados.value.toUpperCase().split('/'));

        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
        console.log({
            nome: this._arquivo.nome, 
            tamanho: this._arquivo.tamanho, 
            tipo: this._arquivo.tipo
        });
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}