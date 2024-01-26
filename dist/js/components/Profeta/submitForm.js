import GerenciadorDePerguntas from "./renderizarPergunta.js";
import GerenciadorDeRespostas from "./verificarOpcaoSelecionada.js";
const gerenciadorDePerguntas = new GerenciadorDePerguntas();
const gerenciadorDeRespostas = new GerenciadorDeRespostas();
const formularioProfeta = document.getElementById('formulario_profeta');
formularioProfeta.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const opcaoSelecionada = gerenciadorDeRespostas.getOpcaoSelecionada();
    const respostaCorreta = gerenciadorDePerguntas.getRespostaCorretaAtual();
    if (opcaoSelecionada === respostaCorreta) {
        alert('Resposta correta!');
        await gerenciadorDePerguntas.avancarParaProximaPergunta();
    }
    else {
        alert('Resposta incorreta. Tente novamente.');
    }
});
// Inicializa o quiz com a primeira pergunta
gerenciadorDePerguntas.iniciarQuiz();
// import { renderizarPerguntas, getRespostaCorretaAtual, avancarParaProximaPergunta } from "./renderizarPergunta.js";
// import { checkedOption } from "./verificarOpcaoSelecionada.js";
// const formularioProfeta = document.getElementById('formulario_profeta');
// formularioProfeta.addEventListener('submit', async (evento) => {
//     evento.preventDefault();
//     const opcaoSelecionada = checkedOption();
//     const respostaCorreta = getRespostaCorretaAtual();
//     if (opcaoSelecionada === respostaCorreta) {
//         alert('Resposta correta!');
//         await avancarParaProximaPergunta(); // Chama a função para avançar para a próxima pergunta
//     } else {
//         alert('Resposta incorreta. Tente novamente.');
//     }
// });
// // Inicializa o quiz com a primeira pergunta
// renderizarPerguntas();
