import { IPerguntas } from "../../types/Profeta/IPerguntas";

async function conectarAPI(): Promise<IPerguntas[]> {

    try {
        
        const resposta = await fetch('/src/json/perguntasProfeta.json');

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar: ${resposta.status}`);
        }

        const perguntas: IPerguntas[] = await resposta.json();

        console.log(perguntas);

        return perguntas

    } catch (erro) {

        console.error('Erro ao conectar à API:', erro);

        return []; // ou lidar com o erro de outra maneira adequada
    }
};

export default conectarAPI;