import { Monstro } from "./Monstro";
import { Personagem } from "./Personagem";

const personagem:Personagem = new Personagem("Dathos", "Bardo", 100, 50)
const monstro:Monstro = new Monstro("Belaza", 250, 20)

function luta(personagem:Personagem, monstro:Monstro){
    console.log(`Você estava andando pela floresta, e de repente encontrou algo inesperado... \nUm monstro, e logo de cara, você já sabia que era da espécie ${monstro.getNome()}`)
    console.log(`Você então percebeu que não seria uma batalha fácil, mas mesmo assim, o enfrentou cheio de determinação.`)
    personagem.atacar(monstro)
}

luta(personagem, monstro)