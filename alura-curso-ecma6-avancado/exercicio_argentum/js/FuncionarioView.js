class FuncionarioView {
    constructor(element) {
        this._element = element;
    }

    adiciona(funcionarios) {
        console.log(funcionarios);
        let templateStr = this._template(funcionarios);
        console.log(templateStr);
        this._element.innerHTML = templateStr;
    }

    _template(funcionarios) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Salário</th>
                    </tr>
                </thead>

                <tbody>
                    ${funcionarios.map( f => `
                            <tr>
                                <td>${f.nome}</td>
                                <td>${f.endereco}</td>
                                <td>${f.salario}</td>
                            </tr>
                        `).join('')}
                <tbody>
            </table>
        `
    }
}