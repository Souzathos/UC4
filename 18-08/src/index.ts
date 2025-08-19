import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog:Dog = new Dog("bob", 10)
const myOwl:Owl = new Owl(`labubu`, 6)
const crocodilo:Crocodile = new Crocodile("bob", 600)

console.log(myDog.name)
console.log(myDog.weight)

myDog.eat()
myDog.bark()

console.log(myOwl.name)
console.log(myOwl.weight)

myOwl.eat()
myOwl.fly()

crocodilo.swim()

const array = [myDog, myOwl, crocodilo]
for(let i = 0; i < array.length; i++) {
    array[i].eat()
}