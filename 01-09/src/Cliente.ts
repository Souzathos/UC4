import { IAutenticavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Cliente extends UsuarioSistema implements IAutenticavel { 
    
    autenticar(usuario: string, senha: string): boolean {
        return usuario == 'cliente' && senha == '1234'
        
    }
    acessarPainel(): void {
        console.log('painel de cliente')
    }
}