 /* const idade = 15;
const temCarteira = false;

if (idade >= 18 && temCarteira) {
  console.log("Você pode dirigir ");
} else if(idade >= 18 && !temCarteira) {
    console.log("Você é de maior, mas nao tem carteira. Não pode dirigir")
} else {
    console.log("Você é menor de idade, não pode dirigir ")
}

const pontuacao = 55;
//condição ? valorSeVerdadeiro : valorSeFalso
const resultado = pontuacao >= 60 ? "Aprovado" : "Reprovado";

console.log(resultado); // "Aprovado"

const fruta:string = "maçã";

switch (fruta) {
  case "banana":
    console.log("Banana é rica em potássio.");
    break;
  case "maçã":
    console.log("Maçã ajuda na digestão.");
    break;
  case "laranja":
    console.log("Laranja tem muita vitamina C.");
    break;
  default:
    console.log("Fruta desconhecida.");
}

import * as readline from 'readline-sync';

console.log("=== MENU PRINCIPAL ===");
console.log("1 - Olá");
console.log("2 - Sobre");
console.log("3 - Sair");
//question é uma frunção pronta da bilbioetca readline-sync
//ele imprime no terminal o que pedirmos, esperando o usuario digitar algo
//quando ele digita, a variável opcao recebe como valor o que o usuário digitou
const opcao = readline.question("Escolha uma opção: ");

switch (opcao) {
  case "1":
    console.log("Olá! Seja bem-vindo!");
    break;
  case "2":
    console.log("Este é um exemplo de menu com switch.");
    break;
  case "3":
    console.log("Saindo...");
    break;
  default:
    console.log("Opção inválida.");
}
*/

import { getAutomaticTypeDirectiveNames } from "typescript"

// EXERCICIOS 

const estaChovendo:boolean = true

if(estaChovendo === true) {
    console.log("leve guarda chuva")
} else {
    console.log("está um bom dia para caminhar.")
}

const nota = 7
const resultado = nota >= 6 ? "Aprovado" : "Reprovado"

const animal:string = "gato"

switch(animal) {
  case "cachorro": 
  console.log("Au Au")
  break

  case "gato":
    console.log("Miau")
    break

  default: 
  console.log("desconhecido")
  break
}

import * as readline from 'readline-sync';

let controlador = true

while(controlador){
console.log("=== MENU PRINCIPAL ===");
console.log("1 - Olá");
console.log("2 - Sobre");
console.log("3 - Sair");
//question é uma frunção pronta da bilbioetca readline-sync
//ele imprime no terminal o que pedirmos, esperando o usuario digitar algo
//quando ele digita, a variável opcao recebe como valor o que o usuário digitou
const opcao = readline.question("Escolha uma opção: ");

switch (opcao) {
  case "1":
    console.log("Olá! Seja bem-vindo!");
    break;
  case "2":
    console.log("Este é um exemplo de menu com switch.");
    break;
  case "3":
    console.log("Saindo...");
    controlador = false
    break;
  default:
    console.log("Opção inválida.");
  
  }
}