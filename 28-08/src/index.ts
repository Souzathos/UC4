import { Circulo } from "./Circulo";
import { IFuncionario } from "./IFuncionario";
import { ILivro } from "./ILivro";
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";
import { Quadrado } from "./Quadrado";
import { SistemaLogin } from "./SistemaLogin";

// Aqui criamos um objeto do tipo IUsuario, ou seja, um objeto que segue as regras da interface que criamos
const meuUsuario: IUsuario = {
        nome: 'athos',
        idade: 17
}


// Interfaces podem ser usadas para tipar parametros de função
// Assim garanto que o objeto que eu usar terá tudo que eu preciso
function mostrarProduto(produto:IProduto):void {
    console.log(`${produto.nome} custa R$${produto.preco}`)
}

const produto:IProduto = {
    nome:'Camiseta',
    preco: 99.99
}

mostrarProduto(produto)


const livro1:ILivro = {
    titulo: 'harry potter',
    autor: 'blabla',
    anoPublicacao: 1990,
    disponivel: true
}

function mostrarLivro(livro: ILivro):void {
    console.log(`Título: ${livro.titulo}, autor: ${livro.autor}, Ano de Publicação: ${livro.anoPublicacao}, disponivel: ${livro.disponivel}`)
}

mostrarLivro(livro1)

const funcionaro:IFuncionario = {
    nome: 'athos',
    cargo: 'dev',
    salario: 9500
}

function calcularBonus(funcionario:IFuncionario):number {
    return funcionario.salario * 0.10
}
console.log(calcularBonus(funcionaro))

const quadrado:Quadrado = new Quadrado(50)
const circulo:Circulo = new Circulo(12)

console.log(quadrado.calcularArea())
console.log(circulo.calcularArea())

const verificacao:SistemaLogin = new SistemaLogin

console.log(verificacao.autenticar("admin", "1234"))