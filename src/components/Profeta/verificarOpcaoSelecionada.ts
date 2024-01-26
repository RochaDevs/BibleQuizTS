class GerenciadorDeRespostas {
    private opcoesDeRespostas: NodeListOf<HTMLInputElement>;

    constructor() {
        this.opcoesDeRespostas = document.getElementsByName('resposta') as NodeListOf<HTMLInputElement>;
    }

    public getOpcaoSelecionada(): string {
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