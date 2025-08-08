export class Dog {
    //atributos de um cachorro
    name:string
    weight:number
    breed:string

    //construtor é chamado automaticamente quando criamos um objeto a partir dessa classe, nele normalmente vamos passar valores para os atributos.
    constructor(dogName:string, dogWeight:number, dogBreed: string){
        this.name = dogName
        this.weight = dogWeight
        this.breed = dogBreed
    }

    bark():void {
        console.log(`${this.name} is barking`)
    }

    eat():void {
        console.log(`${this.name} is eating`)
    }
}
