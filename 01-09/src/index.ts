import { Administrador } from "./Administrador";
import { Cliente } from "./Cliente";
import { Forma } from "./Forma";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { Kohona } from "./Konoha";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

const funcionarioPJ:FuncionarioPJ = new FuncionarioPJ('athos')
const funcionarioCLT:FuncionarioCLT = new FuncionarioCLT('deivao')

console.log(
funcionarioCLT.calcularSalario(2000),
funcionarioPJ.calcularSalario(50, 8)
)

const retangulo:Retangulo = new Retangulo()
const triangulo:Triangulo = new  Triangulo()

const array:Forma[] = [triangulo, retangulo]
console.log(
array[0].calcularArea(5, 10),
array[1].calcularArea(10, 10))

// simulação de entrada de dados
const usuarioDigitado = "labubu";
const senhaDigitada = "1234";
// cria instâncias
const admin:Administrador = new Administrador 
const cliente:Cliente = new Cliente

// verifica login
if (admin.autenticar(usuarioDigitado, senhaDigitada)) {
    admin.acessarPainel();
} else if (cliente.autenticar(usuarioDigitado, senhaDigitada)) {
    cliente.acessarPainel();
} else {
    console.log("Login inválido!");
}


const konoha:Kohona = new Kohona

konoha.main()