System.register(["../models/index", "../views/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, NegociacaoController, DiasDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    if (this._ehDiaUtil(negociacao.data)) {
                        this._mensagemView.update('Não são permitidas negociações aos finais de semana.');
                        return;
                    }
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                importaDados() {
                    function isOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    fetch('http://localhost:8080/dados')
                        .then(res => isOk(res))
                        .then(res => res.json())
                        .then((dados) => dados
                        .map(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante))
                        .forEach(negociacao => {
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                    })).catch(err => console.log(err));
                }
                _ehDiaUtil(data) {
                    return data.getDay() == DiasDaSemana.domingo || data.getDay() == DiasDaSemana.sabado;
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.logarTempoDeExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.logarTempoDeExecucao()
            ], NegociacaoController.prototype, "importaDados", null);
            NegociacaoController = __decorate([
                index_3.meuDecoratorDeClasse()
            ], NegociacaoController);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiasDaSemana) {
                DiasDaSemana[DiasDaSemana["domingo"] = 0] = "domingo";
                DiasDaSemana[DiasDaSemana["segunda"] = 1] = "segunda";
                DiasDaSemana[DiasDaSemana["terca"] = 2] = "terca";
                DiasDaSemana[DiasDaSemana["quarta"] = 3] = "quarta";
                DiasDaSemana[DiasDaSemana["quinta"] = 4] = "quinta";
                DiasDaSemana[DiasDaSemana["sexta"] = 5] = "sexta";
                DiasDaSemana[DiasDaSemana["sabado"] = 6] = "sabado";
            })(DiasDaSemana || (DiasDaSemana = {}));
        }
    };
});
