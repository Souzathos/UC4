export class Calculadora {

    numeroUm:number;
    numeroDois:number;

    constructor(num1:number, num2:number){
        this.numeroUm = num1;
        this.numeroDois = num2;
    }   

    somar():number{
        return this.numeroUm + this.numeroDois
    }

    subtrair():number{
        return this.numeroUm - this.numeroDois
    }

    multiplicar():number {
        return this.numeroUm * this.numeroDois
    }

    dividir():number {
        if(this.numeroDois != 0) {return this.numeroUm/this.numeroDois}
        return NaN
    }
}

