import { verificadorDeSenha } from "./requisitosSenha.js";

const formularioCadastro = document.getElementById('formulario-cadastro') as HTMLFormElement;
const inputSenha = document.getElementById('senha') as HTMLInputElement;

if(formularioCadastro) {
    formularioCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault();
        verificadorDeSenha(inputSenha);
    })
} else (
    alert('Formulario não existe')
)