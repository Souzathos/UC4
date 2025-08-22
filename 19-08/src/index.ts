import { Carro } from "./Carro";
import { ContaPoupanca } from "./ContaPoupanca";
import { Guerreiro } from "./Guerreiro";

const heroi = new Guerreiro(100);
const vilao = new Guerreiro(80);

heroi.atacar(vilao);  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar();       // Acessando protected na própria instância

const carro:Carro = new Carro(70)
carro.acelerar(80)


const conta:ContaPoupanca = new ContaPoupanca(500)

conta.aplicarJuros(50)
