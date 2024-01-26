import conectarAPI from "./conectarAPI.js";
export async function renderizarPerguntas() {
    try {
        const perguntas = await conectarAPI();
        let perguntaIndex = 0;
        const perguntaAtual = perguntas[perguntaIndex]?.question;
        const opcoes = perguntas[perguntaIndex]?.options;
        const respostaCorreta = perguntas[perguntaIndex]?.answer;
        const containerPergunta = document.getElementById('container_pergunta');
        const inputPrimeiro = document.getElementById('resposta1');
        const inputSegundo = document.getElementById('resposta1');
        const inputTerceiro = document.getElementById('resposta1');
        if (containerPergunta && perguntaAtual) {
            containerPergunta.textContent = perguntaAtual;
        }
        else {
            console.error('Elemento container_pergunta não encontrado ou não há perguntas.');
        }
    }
    catch (erro) {
        console.error('Erro ao renderizar a primeira pergunta:', erro);
    }
}
