import conectarAPI from "./conectarAPI.js";
class GerenciadorDePerguntas {
    perguntaIndex = 0;
    respostaCorretaAtual = '';
    perguntas = []; // Tipo apropriado para 'perguntas'
    constructor() {
        this.inicializarPerguntas();
    }
    async inicializarPerguntas() {
        try {
            this.perguntas = await conectarAPI();
            this.renderizarPerguntas();
        }
        catch (erro) {
            console.error('Erro ao inicializar perguntas:', erro);
        }
    }
    async renderizarPerguntas() {
        try {
            // Verificação para assegurar que as perguntas foram carregadas
            if (!this.perguntas.length) {
                console.error('Nenhuma pergunta disponível para renderizar.');
                return;
            }
            const perguntaAtual = this.perguntas[this.perguntaIndex]?.question;
            const opcoes = this.perguntas[this.perguntaIndex]?.options;
            const numeroPerguntaAtual = this.perguntas[this.perguntaIndex]?.id;
            this.respostaCorretaAtual = this.perguntas[this.perguntaIndex]?.answer;
            const labelPrimeiro = document.querySelector(`label[for='resposta1']`);
            const labelSegundo = document.querySelector(`label[for='resposta2']`);
            const labelTerceiro = document.querySelector(`label[for='resposta3']`);
            const containerPergunta = document.getElementById('container_pergunta');
            const inputPrimeiro = document.getElementById('resposta1');
            const inputSegundo = document.getElementById('resposta2');
            const inputTerceiro = document.getElementById('resposta3');
            const containerNumeroPergunta = document.getElementById('numero_pergunta');
            if (containerPergunta && perguntaAtual && opcoes && this.respostaCorretaAtual && inputPrimeiro && inputSegundo && inputTerceiro && labelPrimeiro && labelSegundo && labelTerceiro && containerNumeroPergunta) {
                containerPergunta.textContent = perguntaAtual;
                containerNumeroPergunta.textContent = String(numeroPerguntaAtual);
                inputPrimeiro.value = opcoes[0];
                inputSegundo.value = opcoes[1];
                inputTerceiro.value = opcoes[2];
                labelPrimeiro.textContent = opcoes[0];
                labelSegundo.textContent = opcoes[1];
                labelTerceiro.textContent = opcoes[2];
            }
            else {
                console.error('Elemento container_pergunta não encontrado ou não há perguntas.');
            }
        }
        catch (erro) {
            console.error('Erro ao renderizar a pergunta:', erro);
        }
    }
    async iniciarQuiz() {
        this.renderizarPerguntas();
    }
    getRespostaCorretaAtual() {
        return this.respostaCorretaAtual;
    }
    avancarParaProximaPergunta() {
        this.perguntaIndex++;
        this.renderizarPerguntas();
    }
}
export default GerenciadorDePerguntas;
// ESSENCIALMENTE ALGORITMO EM PARADIGMA FUNCIONAL
// import conectarAPI from "./conectarAPI.js";
// let perguntaIndex: number = 0;
// let respostaCorretaAtual: string = '';
// export async function renderizarPerguntas() {
//     try {
//         const perguntas = await conectarAPI();
//         const perguntaAtual = perguntas[perguntaIndex]?.question;
//         const opcoes = perguntas[perguntaIndex]?.options;
//         const numeroPerguntaAtual = perguntas[perguntaIndex]?.id;
//         respostaCorretaAtual = perguntas[perguntaIndex]?.answer;
//         const labelPrimeiro = document.querySelector(`label[for='resposta1']`);
//         const labelSegundo = document.querySelector(`label[for='resposta2']`);
//         const labelTerceiro = document.querySelector(`label[for='resposta3']`);
//         const containerPergunta = document.getElementById('container_pergunta') as HTMLParagraphElement;
//         const inputPrimeiro = document.getElementById('resposta1') as HTMLInputElement;
//         const inputSegundo = document.getElementById('resposta2') as HTMLInputElement;
//         const inputTerceiro = document.getElementById('resposta3') as HTMLInputElement;
//         const containerNumeroPergunta = document.getElementById('numero_pergunta') as HTMLSpanElement;
//         if (containerPergunta && perguntaAtual && opcoes && respostaCorretaAtual && inputPrimeiro && inputSegundo && inputTerceiro && labelPrimeiro && labelSegundo && labelTerceiro && containerNumeroPergunta) {
//             containerPergunta.textContent = perguntaAtual;
//             containerNumeroPergunta.textContent = String(numeroPerguntaAtual);
//             inputPrimeiro.value = opcoes[0];
//             inputSegundo.value = opcoes[1];
//             inputTerceiro.value = opcoes[2];
//             labelPrimeiro.textContent = opcoes[0];
//             labelSegundo.textContent = opcoes[1];
//             labelTerceiro.textContent = opcoes[2];
//         } else {
//             console.error('Elemento container_pergunta não encontrado ou não há perguntas.');
//         }
//     } catch (erro) {
//         console.error('Erro ao renderizar a primeira pergunta:', erro);
//     }
// }
// export function getRespostaCorretaAtual() {
//     return respostaCorretaAtual
// }
// export function avancarParaProximaPergunta() {
//     perguntaIndex++;
//     return renderizarPerguntas();
// }
