import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento {
    processar(valor:number): void {
        console.log(`Processando boleto do valor de ${valor} reais`)
    }
}