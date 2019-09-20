import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoDeExecucao, domInject, meuDecoratorDeClasse } from "../helpers/decorators/index";

@meuDecoratorDeClasse()
export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao()
    adiciona(event:Event): void {
        event.preventDefault();

        const negociacao = new Negociacao (
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        if(this._ehDiaUtil(negociacao.data)) {
            this._mensagemView.update('Não são permitidas negociações aos finais de semana.');

            return;
        }

        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    @logarTempoDeExecucao()
    importaDados() {
        function isOk(res: Response) {
            if(res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        fetch('http://localhost:8080/dados')
            .then(res => isOk(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => {
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                    })
            ).catch(err => console.log(err));
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() == DiasDaSemana.domingo || data.getDay() == DiasDaSemana.sabado;
    }
}

enum DiasDaSemana {
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}