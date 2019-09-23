System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, DiasDaSemana;
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
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._negociacaoService = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona() {
                    const negociacao = new index_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    if (this._ehDiaUtil(negociacao.data)) {
                        this._mensagemView.update('Não são permitidas negociações aos finais de semana.');
                        return;
                    }
                    this._negociacoes.adiciona(negociacao);
                    index_5.imprime(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                importaDados() {
                    const isOk = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this._negociacaoService
                        .obterNegociacoes(isOk)
                        .then(negociacoesParaImportar => {
                        const negociacoesJaImportadas = this._negociacoes.paraArray();
                        negociacoesParaImportar.filter(negociacao => !negociacoesJaImportadas.some(jaImportada => negociacao.ehIgual(jaImportada))).forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    }).catch(err => this._mensagemView.update('Não foi possivel importar as negociações'));
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
                index_3.logarTempoDeExecucao(),
                index_3.throttle(50)
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.logarTempoDeExecucao(),
                index_3.throttle()
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
