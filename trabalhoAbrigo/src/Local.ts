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
    
    mostrarInfo():string {
        return `Nome: ${this.nome} | Endereço: ${this.endereco} | Cidade: ${this.cidade} | Telefone: ${this.telefone}`
    }

    getNome():string {
        return this.nome
    }

    getEndereco():string {
        return this.endereco
    }
    
    getCidade():string {
        return this.cidade
    }

    getTelefone():string{
        return this.telefone
    }
}