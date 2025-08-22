import { Animal } from "./Animal";

export class Cachorro extends Animal {
    // Sobrescrevendo um método que foi criado na classe pai
    falar():void {
        console.log(`O cachorro esta latindo`)
    }
}