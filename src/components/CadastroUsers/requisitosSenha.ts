
export function verificadorDeSenha(senhaAhVerificar: HTMLInputElement) {
    const inputSenhaValue = senhaAhVerificar.value;
    const caracteresEspeciais = ['@', '#', '%', '&'];

    const contemCaracterEspecial = caracteresEspeciais.some(caracter => 
        inputSenhaValue.includes(caracter)
    );

    const possuiNumero = /\d/.test(inputSenhaValue); // Verifica a presença de números
    const possuiMaiuscula = /[A-Z]/.test(inputSenhaValue); // Verifica a presença de letras maiúsculas
    const possuiMinuscula = /[a-z]/.test(inputSenhaValue); // Verifica a presença de letras minúsculas

    if(contemCaracterEspecial && possuiNumero && possuiMaiuscula && possuiMinuscula) {
        alert('Sua senha está de acordo com as nossas normas de segurança');
    } else (
        alert('Sua senha não está de acordo com as nossas normas de segurança')
    )
}
