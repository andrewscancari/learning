import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View<T> {
    protected _elemento: JQuery;
    private _escape: boolean;

    constructor(seletor: string, escape: boolean = false) {
        this._elemento = $(seletor);
        this._escape = escape;
    }

    @logarTempoDeExecucao()
    update(model: T): void {
        let template:string = this.template(model);
        if(this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this._elemento.html(template);
    }

    abstract template(model: T): string;
}