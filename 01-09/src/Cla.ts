export abstract class Cla{ 
    nomeDoCla:string
    lider:string

    constructor(nomeCla:string, lider:string){
        this.lider = lider
        this.nomeDoCla = nomeCla
    }

     abstract habilidadesEspeciais():void

     exibirDetalhes():void {
        console.log("Exibindo detalhes...")
     }
}