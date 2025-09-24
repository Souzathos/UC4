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



 import { Boleto } from "./Boleto";
import { Caminhao } from "./Caminhao";
import { Carga } from "./Carga";
import { Cartao } from "./Cartao";
import { IProduto } from "./IProduto";
import { Loja } from "./Loja";
import { lojaDeEletronico } from "./LojaDeEletronico";

import { LojaDeRoupa } from "./LojaDeRoupa";
import { Moto } from "./Moto";
import { Navio } from "./Navio";
import { Veiculo } from "./Veiculo";


/* EXERCICIO 2
import { Artigo } from "./Artigo";
import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";
import { Revista } from "./Revista";


const livro:Livro = new Livro(`Pequeno principe`, 1980, "bruno")
const revista:Revista = new Revista(`forbes`, 2015, "setembro")
const artigo:Artigo = new Artigo(`ACES`, 2025, "SI28RENB2")
const biblioteca:Biblioteca = new Biblioteca()
 livro.exibir()
revista.exibir()
artigo.exibir() 
biblioteca.adicionar(revista)
biblioteca.adicionar(livro)
biblioteca.adicionar(artigo)
console.log(biblioteca.buscarPorTitulo("forbes"))
 */

// etbilu

/* const lojaDeEletronico:LojaDeEletronico<IProduto> = new LojaDeEletronico("asdas", 15, "2024-05-12")
const produto:LojaDeEletronico<IProduto> = new LojaDeEletronico("asdas", 15, "2024-05-12")

lojaDeEletronico.adicionar(produto)
lojaDeEletronico.listar() */


      /*   EXERCICIO 3 */

export interface Eletronico extends IProduto{
    garantia:string
}
export interface Roupa extends IProduto {
    tamanho:string
}
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



const moto:Moto = new Moto(30)
const navio:Navio = new Navio(10000)
const caminhao:Caminhao = new Caminhao(5000)
const cargaMoto:Carga<Veiculo> = new Carga(moto, 40)
const cargaNavio:Carga<Veiculo> = new Carga(navio, 100000)
const cargaCaminhao:Carga<Veiculo> = new Carga(caminhao, 5001)



moto.transportar(cargaMoto)
navio.transportar(cargaNavio)
caminhao.transportar(cargaCaminhao)

