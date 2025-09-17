import { Calculadora } from "./Calculadora";
import { Desenhista } from "./Desenhista";
import { Estoque } from "./Estoque";
import { Mensageiro } from "./Mensageiro";
import { Repositorio } from "./Repositorio";
import { Loja } from "./loja";


const calc:Calculadora = new Calculadora()

//passando number
calc.somar(1,2)
// passando strings
calc.somar("Athos", " de souza")

const mensagem:Mensageiro = new Mensageiro()

mensagem.enviar(['boi novo', 'decks', "clara godoy + tres pila"], "falta 3 píla")


  
  // 👇 Testando
  const d = new Desenhista();
  
  d.desenhar(10);       // Desenhando um círculo de raio 10
  d.desenhar(20, 30);   // Desenhando um retângulo de 20x30

const r = new Repositorio();
const u = r.buscar(1);     // retorna string
const lista = r.buscar("a"); // retorna string[]

const loja = new Loja();
loja.adicionarProduto("Caneca");
loja.adicionarProduto(["Chaveiro", "Almofada", "Caneta"]);
loja.listarProdutos();

const estoque = new Estoque();
  
  estoque.remover("Arroz");

  
  estoque.remover(["Feijão", "Açúcar", "Chocolate"]);

  
  estoque.listarProdutos();
  