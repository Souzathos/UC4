import { Dog } from "./Dog"

// string
let nome:string = 'athos'

//number
let idade:number = 17

//boolean
let deMaior:boolean = false

//arrays: 2 tipos de fazer (nao muda nada)
let numeros:Array<number> = [1,2,3]
let nomes: string[] = ['athos', 'decks']

//objeto 
let pessoa:{nome:string, idade:number} = {
    nome:'athos',
    idade: 17
}


function calcula(num:number, num2:number):number{
    return num + num2
}

console.log(calcula(10,2))

function mensagem(meuNome:string):string{
    return `olá ${meuNome}, tudo bem com voce?`
}

console.log(mensagem("gotao"))

//function sem retorno

function frase():void {
    console.log("E ae")
}

frase()


//function com parametros opcionais 
function sayHello (name?: string):void {
    console.log("hello", name || "world")
}
sayHello()
sayHello("pedro pim")

// 

function applyDiscount(price:number, discount:number = 0.05): number {
    return price * (1 - discount)
}

console.log(applyDiscount(1000))
console.log(applyDiscount(1000, 0.5))


// Criação de objeto a partir da classe dog
let myDog:Dog = new Dog("amora", 10, "lulu da pomerania")
let myOtherDog:Dog = new Dog("laika", 25, "labrador")

//assim eu acesso seus atributos
console.log(myDog.name)
console.log(myOtherDog.breed)

//assim eu chamo os metodos
myDog.bark()
myOtherDog.eat()