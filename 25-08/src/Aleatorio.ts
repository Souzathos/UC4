import * as readline from 'readline-sync';

export class Aleatorio {
    maxNumero:number = 100

    gerarNumeroSecreto():number {
        return Math.floor(Math.random() * this.maxNumero) + 1
    }

    adivinharNumero():void {
        let condicao = true
        let tentativas:number = 0
        const numeroSecreto = this.gerarNumeroSecreto()

        while(condicao){
            const palpite:number = Number(readline.question(`Dê um palpite: `)) 
            tentativas++ 

            if(palpite === numeroSecreto) {
                console.log(`Você acertou! número de tentativas: ${tentativas}`)
                condicao = false
            } else if (palpite > numeroSecreto){
                console.log(`Muito alto!`)
            } else {
                console.log(`Muito baixo!`)
            }
        }
    }
}
