import { verificadorDeSenha } from "./requisitosSenha.js";
const formularioCadastro = document.getElementById('formulario-cadastro');
const inputSenha = document.getElementById('senha');
if (formularioCadastro) {
    formularioCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault();
        verificadorDeSenha(inputSenha);
    });
}
else
    (alert('Formulario não existe'));
