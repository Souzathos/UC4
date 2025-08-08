import { SignatureKind } from "typescript";

function exibirAluno(nomeAluno:string, idadeAluno:number, estaMatriculado:boolean):void{
    console.log(`o aluni ${nomeAluno} tem ${idadeAluno} esta matriculado: ${estaMatriculado}`)
}

exibirAluno("athos", 17, true)

let alunos: string[] = ['athos', 'davis', 'arthur', 'leo', 'pedro'];

function recebeArray(alunos: string[]): string {
    return "Alunos:\n " + alunos.join("\n ");
}

console.log(recebeArray(alunos));


function saudacao(nome:string):void {
    console.log(`Saudações ${nome}`)
}

saudacao("athos")

function calculaMedia(nota1:number, nota2:number, nota3:number):number{
    let media:number = (nota1 + nota2 + nota3)/3
    return media
}

console.log(calculaMedia(10,10,10))

function contarAlunos(listaAlunos:string[]):void {
    let contaAlunos = listaAlunos.length
    console.log(`essa turma tem: ${contaAlunos} alunos`)
}
let array:string[] = ["athos", "decls", "brunao", "guilherme"]

contarAlunos(array)

// 06/08

for(let voltas: number = 0; voltas < 10; voltas ++) {
    console.log(`o ciclista deu tantas ${voltas} voltas. `)
}


let voltas: number = 0
while (voltas <= 10 ){
    console.log(`o ciclista deu tantas ${voltas} voltas. `)
    voltas ++
}


const numeros:number[]= [10,20,30,40,50]

for (let i:number = 0; i < numeros.length; i ++){
    console.log("numeros:" + numeros[i])
}

// para cada item do meu array
// para cada nuymero dentro do array numeros
// nao funciona para objetos
for(let numero of numeros){
    console.log("numero: ", numero)
}

const pessoa: {nome:string, idade:number} = {
    nome: 'leo',
    idade: 30
}

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`)
}

//type of descobre o tipo de algo, keyof pega as chaves de um objeto, keyof typeof pessoa primeiro descobnre o tipo do objeto, dps pega as chaves dele

// FOREACH

const personagens:string[] = ["frodo", "gandalf", "legolas"]

//ele serve para executar uma função para cada item deste array
//essa funcao é chamada como parâmetro do forEach (callBack)
//o primeiro parâmetro desta função é o valor do item, e o segundoi é o seu índidce

personagens.forEach((nome, indice) => {
    console.log(`Personagem ${indice}: ${nome}`)
})



// EXERCICIOS 
const sociedade: string[] = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pipin', 'Aragorn', 'Boromir'];

for(let i = 0; i < sociedade.length; i++){
    if(sociedade[i] === 'Frodo' || sociedade[i] === 'Sam' || sociedade[i] === 'Merry' || sociedade[i] === 'Merry' || sociedade[i] === 'Pippin'){
        console.log(`Hobbit encontrado: ${sociedade[i]}`)
    }
}


const personagensStar = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
  ];

  for(let jedis of personagensStar){
    if(jedis.jedi){
        console.log(jedis)
    }
  }


  const personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
  };

  for (const character in personagensNaruto) {
    console.log(`${character}: ${personagensNaruto[character as keyof typeof personagensNaruto]}`)
}


const personagensDBZ = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
  ];
  
  personagensDBZ.forEach(({ nome, poder }) => {
    if (poder > 8000) {
      console.log(`O poder de ${nome} é de mais de 8000!`);
    }
  });
  

  const pokemons:string[] = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let contador = 0
  while(contador < pokemons.length){
    if(pokemons[contador] === 'Mewtwo'){
        console.log("Pokemon lendario encontrado: mewtwo!")
        break
    }
    console.log(`Caputrando ${pokemons[contador]}`)
    contador++
  }


  let passos = 0
  const passosParaMordor = 5

  do {
    console.log(`Dando passo ${passos}`)
    passos++
  } while(passos < passosParaMordor) {
    console.log('Chegamos em Mordor!')
  }