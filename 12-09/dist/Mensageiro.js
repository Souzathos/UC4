"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensageiro = void 0;
class Mensageiro {
    enviar(dest, mensagem) {
        if (Array.isArray(dest)) {
            console.log("Enviando para vários:", dest.join(", "));
        }
        else {
            console.log("Enviando para:", dest);
        }
        console.log("Mensagem:", mensagem);
    }
}
exports.Mensageiro = Mensageiro;
// 👇 Testando
const m = new Mensageiro();
m.enviar("Ana", "Oi, tudo bem?");
// Enviando para: Ana
// Mensagem: Oi, tudo bem?
m.enviar(["João", "Maria"], "Bom dia, galera!");
// Enviando para vários: João, Maria
// Mensagem: Bom dia, galera!
