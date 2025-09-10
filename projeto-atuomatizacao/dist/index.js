"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
// Função principal que irá criar o projeto
function createTsProject() {
    // Código será adicionado aqui nos próximos passos
    // Passo 1: Pergunta o nome do projeto
    const projectName = readline_sync_1.default.question("Digite o nome do projeto: ");
    // Validação simples: não pode ser vazio
    if (!projectName) {
        console.log("❌ Nome do projeto não pode ser vazio!");
        return; // encerra a função se o usuário não digitou nada
    }
    // Caminho da pasta que será criada "uma acima" da pasta atual
    const projectPath = path_1.default.join("..", projectName);
    // Cria a pasta do projeto, recursive:true garante criação de pastas intermediárias
    fs_1.default.mkdirSync(projectPath, { recursive: true });
    // Entra na pasta criada
    process.chdir(projectPath);
    console.log("Inicializando o projeto...");
    // Inicializa npm (cria package.json padrão)
    (0, child_process_1.execSync)("npm init -y", { stdio: "inherit" });
    // Instala TypeScript 
    (0, child_process_1.execSync)("npm install typescript", { stdio: "inherit" });
    // Cria o tsconfig.json com as configurações desejadas
    const tsConfig = {
        compilerOptions: {
            target: "ES6", // gera JavaScript compatível com ES6
            module: "commonjs", // usa módulos do Node.js
            outDir: "./dist", // pasta onde o JS compilado será salvo
            rootDir: "./src", // pasta onde estão os arquivos TS
            strict: true, // ativa verificação rigorosa de tipos
            moduleResolution: "Node", // resolve módulos como o Node faz
            esModuleInterop: true // permite import fs from 'fs'
        },
        include: ["src"], // inclui a pasta src na compilação
        exclude: ["node_modules"] // ignora a pasta node_modules
    };
    fs_1.default.writeFileSync("tsconfig.json", JSON.stringify(tsConfig, null, 2));
    // Lê o package.json criado pelo npm init
    const packageJsonRaw = fs_1.default.readFileSync("package.json", "utf-8");
    // Converte o texto JSON em um objeto JavaScript/TypeScript
    const packageJson = JSON.parse(packageJsonRaw);
    // Adiciona scripts desejados
    packageJson.scripts = {
        test: 'echo "Error: no test specified" && exit 1', // script de teste padrão
        build: "tsc", // compila TS -> JS
        start: "tsc && node dist/index.js" // compila e roda o JS gerado
    };
    fs_1.default.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
    fs_1.default.mkdirSync("src");
    fs_1.default.writeFileSync("src/index.ts", `console.log("Hello TypeScript!");`);
    console.log(`\n✅ Projeto "${projectName}" criado com sucesso em "${projectPath}"`);
    console.log("👉 Para começar:");
    console.log(`cd ../${projectName}`);
    console.log("npm run build");
    console.log("npm start");
}
createTsProject();
