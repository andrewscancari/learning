class ContaPoupanca extends Conta {
    atualiza(taxa) {
        this.saldo += (taxa*2);
    }
}