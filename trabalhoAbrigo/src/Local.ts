export class Local {
    protected nome:string
    protected endereco:string
    protected cidade:string
    protected telefone:string

    constructor(nome:string, endereco:string, cidade:string, telefone:string){
        this.nome = nome
        this.endereco = endereco
        this.cidade = cidade
        this.telefone = telefone
    }

    mostrarInfo():void {
        console.log(`Aasda`)
    }
}