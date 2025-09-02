

import { ClaAkimishi } from "./ClaAkimichi";
import { ClaHyuga } from "./ClaHyuga";
import { ClaNara } from "./ClaNara";
import { ClaUchiha } from "./ClaUchiha";

export class Kohona {
    main():void{
        const claUchiha:ClaUchiha = new ClaUchiha('Uchiha', 'Sasuke')
        const claAkimishi:ClaAkimishi = new ClaAkimishi('Akimishi', 'Chouza')
        const claHyuga:ClaHyuga = new ClaHyuga('Hyuga', 'Hiashi')
        const claNara:ClaNara = new ClaNara('Nara', 'Shikamaru')

        claAkimishi.habilidadesEspeciais()
        claAkimishi.exibirDetalhes()

        claUchiha.exibirDetalhes()
        claUchiha.habilidadesEspeciais()

        claHyuga.exibirDetalhes()
        claHyuga.habilidadesEspeciais()

        claNara.exibirDetalhes()
        claNara.habilidadesEspeciais()
    }
    
}