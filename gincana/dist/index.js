"use strict";
/* import { Heroi } from "./Heroi";
import { Missao } from "./Missao";
import { Vilao } from "./Vilao";

EXERCICIO 1

const missao:Missao[] = []

const missaoVilao:Missao = new Missao(`Destruir o mundo`, 20)
const missaoHeroi:Missao = new Missao("salvar o mundo", 10)


const heroi:Heroi = new Heroi(`Superman`, 10, 5, missao)
const vilao:Vilao = new Vilao(`coringa`, 10, 5,  missao)


vilao.aceitarMissao(missaoVilao)
vilao.concluirMissao(missaoVilao)
vilao.status()

heroi.aceitarMissao(missaoHeroi)
heroi.concluirMissao(missaoHeroi)
heroi.status()
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Caminhao_1 = require("./Caminhao");
const Carga_1 = require("./Carga");
const Moto_1 = require("./Moto");
const Navio_1 = require("./Navio");
/*
const lojaRoupa = new LojaDeRoupa()
const lojaEle = new lojaDeEletronico()


const camiseta:Roupa = {nome: "nike", tamanho: "P", preco: 155}
const camiseta2:Roupa = {nome: "adidas", tamanho: "P", preco: 155}
const celular:Eletronico = {garantia: "2025-07-12", nome: "iphone", preco: 5000}
const celular2:Eletronico = {garantia: "2025-07-12", nome: "iphone", preco: 5000}


lojaRoupa.adicionar(camiseta)
lojaRoupa.adicionar(camiseta2)
console.log(lojaRoupa.listar())
lojaEle.adicionar(celular)
lojaEle.adicionar(celular2)
console.log(lojaEle.listar())

console.log(lojaRoupa.calcularTotal())
console.log(lojaEle.calcularTotal())
 */
// zedamanga
/* import { Pix } from "./Pix"

const cartao:Cartao = new Cartao(5000)
const boleto:Boleto = new Boleto(200)
const pix:Pix = new Pix(25)

cartao.pagar(5000)
cartao.pagar(5000, 12)
boleto.pagar()
console.log(`Código aleatório gerado: ${pix.pagar()}`)

 */
const moto = new Moto_1.Moto(30);
const navio = new Navio_1.Navio(10000);
const caminhao = new Caminhao_1.Caminhao(5000);
const carga = new Carga_1.Carga(moto, 40);
const cargaNavio = new Carga_1.Carga(navio, 100000);
const cargaCaminhao = new Carga_1.Carga(caminhao, 5001);
moto.transportar(carga);
navio.transportar(cargaNavio);
caminhao.transportar(cargaCaminhao);
