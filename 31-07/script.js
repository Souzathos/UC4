"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
// string
var nome = 'athos';
//number
var idade = 17;
//boolean
var deMaior = false;
//arrays: 2 tipos de fazer (nao muda nada)
var numeros = [1, 2, 3];
var nomes = ['athos', 'decks'];
//objeto 
var pessoa = {
    nome: 'athos',
    idade: 17
};
function calcula(num, num2) {
    return num + num2;
}
console.log(calcula(10, 2));
function mensagem(meuNome) {
    return "ol\u00E1 ".concat(meuNome, ", tudo bem com voce?");
}
console.log(mensagem("gotao"));
//function sem retorno
function frase() {
    console.log("E ae");
}
frase();
//function com parametros opcionais 
function sayHello(name) {
    console.log("hello", name || "world");
}
sayHello();
sayHello("pedro pim");
// 
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(1000));
console.log(applyDiscount(1000, 0.5));
// Criação de objeto a partir da classe dog
var myDog = new Dog_1.Dog("amora", 10, "lulu da pomerania");
var myOtherDog = new Dog_1.Dog("laika", 25, "labrador");
//assim eu acesso seus atributos
console.log(myDog.name);
console.log(myOtherDog.breed);
//assim eu chamo os metodos
myDog.bark();
myOtherDog.eat();
