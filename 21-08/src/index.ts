import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";

const cachorro:Cachorro = new Cachorro
const gato:Gato = new Gato

cachorro.falar()
gato.falar()


const listaVeiculos:Veiculo[] = [
    new Carro(),
    new Bicicleta()
]

listaVeiculos.forEach(veiculo =>{
    veiculo.mover()
})


const pagamentos:Pagamento[] = [
    new Boleto(),
    new CartaoCredito()
]

pagamentos.forEach(pagamento => {
    pagamento.processar(50)
})
