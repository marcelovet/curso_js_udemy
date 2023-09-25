// polimorfismo
// o metodo age de forma diferente conforme o objeto especializado
// superclass
function Conta (agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo.toFixed(2)}`)
    return
  }

  this.saldo -= valor
  this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor
  this.verSaldo()
}

Conta.prototype.verSaldo = function () {
  console.log(`agencia: ${this.agencia} conta: ${this.conta}`)
  console.log(`Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(11, 22, 10)
conta1.verSaldo()
conta1.depositar(32.4)
conta1.sacar(20)
conta1.sacar(30)

function ContaCorrente (agencia, conta, saldo, limite = 100) {
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
  if ((this.saldo + this.limite) < valor) {
    console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo.toFixed(2)}`)
    return
  }

  this.saldo -= valor
  this.verSaldo()
}

const cc1 = new ContaCorrente(123, 456, 80, 100)
cc1.depositar(10)
cc1.sacar(190)
cc1.sacar(1)

function ContaPoupanca (agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const cp1 = new ContaPoupanca(123, 456, 100)
cp1.depositar(10)
cp1.sacar(190)
cp1.sacar(1)
