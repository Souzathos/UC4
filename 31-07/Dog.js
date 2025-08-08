"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    //construtor é chamado automaticamente quando criamos um objeto a partir dessa classe, nele normalmente vamos passar valores para os atributos.
    function Dog(dogName, dogWeight, dogBreed) {
        this.name = dogName;
        this.weight = dogWeight;
        this.breed = dogBreed;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking"));
    };
    Dog.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    return Dog;
}());
exports.Dog = Dog;
