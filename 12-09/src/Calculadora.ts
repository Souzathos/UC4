export class Calculadora{ 

    // Aqui crio as ASSINATURAS DE MÉTODO
    somar(a:string, b:string):void

    somar(a: number, b:number): void

    // Aqui crio a imlementação do método
    // ou seja, defino sua logica
    somar(a:any, b:any):any {
        console.log(a + b)
    }
}

