import { Monstro } from "./Monstro";
import { Personagem } from "./Personagem";

const personagem:Personagem = new Personagem("Zathos", "Bardo", 1000, 50)
const monstro:Monstro = new Monstro("Belaza", 2500, 20)

/*function luta(personagem:Personagem, monstro:Monstro){
    console.log(`Você estava andando pela floresta, e de repente encontrou algo inesperado... \nUm monstro, e logo de cara, você já sabia que era da espécie ${monstro.getNome()}`)
    console.log(`Você então percebeu que não seria uma batalha fácil, mas mesmo assim, o enfrentou cheio de determinação.`)
    personagem.atacar(monstro)
    console.log(`Após o seu primeiro golpe, você nota que o monstro tem uma grande quantidade de vida. Então, puxou uma arma mais poderosa, ganhando mais pontos de força.`)
    personagem.setForca(100) 
    console.log(`Você agora tem ${personagem.getForca()} pontos de força.`) 
    console.log(`Agora é a vez do monstro atacar, você analiza suas habilidades e percebe que ele tem ${monstro.getForca()} pontos de força. \nVocê sabe que isso vai doer.`)
    personagem.dano(monstro)
    console.log(`Você prepara o seu próximo ataque, mas o monstro foi mais rapido e disferiu mais dois ataques em você.`)
    personagem.dano(monstro)
    personagem.dano(monstro)
    console.log(`Você percebe que está muito ferido, então recua e acha uma poção de cura no chão. Você a usa!`)
    personagem.curar(50)
    console.log(`Você agora, com sua vida recuperada, parte pra cima do monstro. Você apunhala a sua espada na garganta dele, causando ${personagem.getForca()} pontos de dano, porém ela fica presa, e você acaba voltando para seu nível de força inicial`)
    personagem.atacar(monstro)
    personagem.setForca(50)
    console.log(`E sua força voltou para ${personagem.getForca()} pontos de dano`)
    console.log(`O monstro ficou enfurecido. E despertou uma nova forma! Seu nível de força aumentou em 50 pontos!`)
    monstro.setForca(70)
    console.log(`O monstro tem ${monstro.getForca()} pontos de força agora!`)
    console.log(`O monstro, furioso, vem em sua diferção e você sofre mais um ataque dele.`)
    personagem.dano(monstro)
    console.log(`Você percebe que está muito ferido, e precisa pensar em algo rápido para conseguir vencer a batalha. Então, vendo o monstro consumido pela raiva, você conjura sua flauta encantada, fazendo o monstro ver uma ilusão. Na qual, você faz ele achar que uma rocha é você.`)
    console.log(`E ele acaba indo enfurecidamente pra cima dela, fazendo com que bata sua cabeça muito forte, e consequentemente, perdendo 50 pontos de vida.`)
    monstro.setVida(50)
    console.log(`O monstro agora, tem ${monstro.getVida()} pontos de vida.`)
    console.log(`Então, sem pensar duas vezes, vendo o monstro atordoado, você parte pra cima dele. Disferindo o golpe final, no meio de seu peito!`)
    personagem.atacar(monstro)
    console.log(`Você ganhou! 🎉​ VITÓRIA! 🎉​`)
}

luta(personagem, monstro)*/







import * as readline from 'readline-sync';
const opcaoNome = readline.question(" Escolhe o nome do personagem: ");
const opcaoClasse = readline.question("Escolha a classe do persomagem: ");
console.log(opcaoNome,opcaoClasse)

let controlador = true

while(controlador){
console.log("=== MENU PRINCIPAL ===");
console.log("1 - ATAQUE");
console.log("2 - CURAR");
console.log("3 - FUGIR");

const opcao = readline.question("Escolha uma opção: ");

switch (opcao) {
  case "1":

    personagem.dano(monstro)
    monstro.dano(personagem)
    
    break;
  case "2":
    
    personagem.curar(100)
    break;
  case "3":
    console.log("ARREGOU....");
    controlador = false
    break;
  default:
    console.log("Opção inválida.");
}
}