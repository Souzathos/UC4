import { Cachorro } from "./Cachorro";
import { Calculadora } from "./Calculadora";

// Para podermos criar um objeto da nossa classe 'Cachorro', primeiro criamos uma variavel que deve ser do tipo Cachorro
// Depois, atribuimos valor a esta variavel usando a palavra reservada 'new' seguida do nome da classe junto de parenteses. Assim chamamos o construtor da classe e devemos, dentro dos parenteses, passar todos os valores que nós definimos

// Quando criamos um objeto, chamamos isso de INSTANCIAR O OBJETO DA CLASSE
const meuCachorro:Cachorro = new Cachorro("Amora", "lulu", 2)
const meuOutroCachorro:Cachorro = new Cachorro("Laika", "Labrador", 10)

// Para chamarmos os métodos destes objetos, chamamos o nome da váriavel + . + o nome do método
meuCachorro.correr()
meuCachorro.latir()

meuOutroCachorro.correr()
meuOutroCachorro.latir()

// Para acessarmos o valor do atributo de um objeto, chamamos o nome da variável + . + o nome do atributo
console.log(meuOutroCachorro.idade)

// Para trocarmos o valor do atributo de um objeto, chamamos o nome da variável + . + o nome do atributo, depois '=' e passamos o novo valor
meuCachorro.idade = 6
console.log(meuCachorro.idade)

//Crie um novo arquivo chamado calculadora
//Dentro deste arquivo crie a classe calculadora
//crie os atributos numeroUm e numeroDois
//faça o construtor
//depois faça os metodos somar, subtrair, multiplicar e dividir
//Após isso, no arquivo index.ts, instancie a calculadora 

const calculo:Calculadora = new Calculadora(20, 10)

console.log(`Resultado da divisão: ${calculo.dividir()}`)
console.log(`Resultado da multiplicação: ${calculo.multiplicar()}`)
console.log(`Resultado da subtração: ${calculo.subtrair()}`)
console.log(`Resultado da soma: ${calculo.somar()}`)
