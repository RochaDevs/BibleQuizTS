class GerenciadorDeRespostas {
    opcoesDeRespostas;
    constructor() {
        this.opcoesDeRespostas = document.getElementsByName('resposta');
    }
    getOpcaoSelecionada() {
        let opcaoSelecionada = '';
        for (const opcao of this.opcoesDeRespostas) {
            if (opcao.checked) {
                opcaoSelecionada = opcao.value;
                break; // Interrompe o loop uma vez que a opção selecionada é encontrada
            }
        }
        return opcaoSelecionada;
    }
}
export default GerenciadorDeRespostas;
// export function checkedOption(): string {
//     const opcoesDeRespostas = document.getElementsByName('resposta') as NodeListOf<HTMLInputElement>;
//     let opcaoSelecionada = '';
//     for (const opcao of opcoesDeRespostas) {
//         if (opcao.checked) {
//             opcaoSelecionada = opcao.value;
//             break; // Interrompe o loop uma vez que a opção selecionada é encontrada
//         }
//     }
//     return opcaoSelecionada
// }
