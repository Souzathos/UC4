"use strict";
/* import { Heroi } from "./Heroi";
import { Missao } from "./Missao";
import { Vilao } from "./Vilao";



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
const Artigo_1 = require("./Artigo");
const Biblioteca_1 = require("./Biblioteca");
const Livro_1 = require("./Livro");
const Revista_1 = require("./Revista");
const livro = new Livro_1.Livro(`Pequeno principe`, 1980, "bruno");
const revista = new Revista_1.Revista(`forbes`, 2015, "setembro");
const artigo = new Artigo_1.Artigo(`ACES`, 2025, "SI28RENB2");
const biblioteca = new Biblioteca_1.Biblioteca();
/* livro.exibir()
revista.exibir()
artigo.exibir() */
biblioteca.adicionar(revista);
biblioteca.adicionar(livro);
biblioteca.adicionar(artigo);
console.log(biblioteca.buscarPorTitulo("forbes"));
