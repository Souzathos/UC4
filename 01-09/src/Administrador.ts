import { IAutenticavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Administrador extends UsuarioSistema implements IAutenticavel {
    
    acessarPainel(): void {
        console.log("Painel de administrador")
    }
    autenticar(usuario: string, senha: string): boolean {
        return usuario == 'admin' && senha == '1234'
    }
}