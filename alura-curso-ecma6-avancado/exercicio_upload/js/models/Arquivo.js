class Arquivo {

    constructor(nome, tamanho) {
        if(!/^\d+$/.test(tamanho)) throw new Error('O tamanho deve ser apenas de numeros em bytes')
        
        let tipoDeArquivo = this._tipoDeArquivo(nome);

        if(!tipoDeArquivo) throw new Error('O nome do arquivo deve possuir uma extensão.')

        
        this._nome = nome;
        this._tamanho = tamanho;
        this._tipo = tipoDeArquivo;
    }

    _tipoDeArquivo(nome) {
        let dotIdx = nome.lastIndexOf('.');
        if(dotIdx < 0) {
            return null;
        }

        return nome.substring(dotIdx + 1);
    }

    get nome() {
        return this._nome;
    }

    get tamanho() {
        return this._tamanho;    
    }

    get tipo() {
        return this._tipo;
    }
}