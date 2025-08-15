
import { Entregador } from "./Entregador";
import { Pacote } from "./Pacote";
import { Pessoa } from "./Pessoa";

const pessoa:Pessoa = new Pessoa("Athos", 15)

console.log(pessoa.getNome())
console.log(pessoa.apresentar())


pessoa.setIdade(5)
console.log(pessoa.getIdade())

const entregador:Entregador = new Entregador("Athao")
const pacote:Pacote = new Pacote("São Leopoldo", 5)

entregador.alterarEndereco(pacote, "Unisinos")
entregador.entregarPacote(pacote)