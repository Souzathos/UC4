import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento{
    processar(valor: number): void {
        console.log(`Parcelando valor de ${valor} reais`)
    } 
}