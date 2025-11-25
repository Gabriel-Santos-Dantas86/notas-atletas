// 1. Entrada de dados conforme especificação
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Função principal para calcular e exibir as médias
function calcularMedias(objAtletas) {
    const container = document.getElementById('resultados');
    
    // Limpa o container antes de adicionar novos resultados
    container.innerHTML = '';

    // Dica 1: Utilizando laço for para percorrer a matriz
    for (let i = 0; i < objAtletas.length; i++) {
        let atleta = objAtletas[i];
        
        // Criamos uma cópia das notas para não alterar a ordem original
        // Dica 2: Utilizando .sort()
        let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);

        // Dica 4: Utilizando .slice(1, 4) para pegar as 3 notas do meio
        let notasComputadas = notasOrdenadas.slice(1, 4);

        // Dica 5: Utilizando .forEach() para somar
        let soma = 0;
        notasComputadas.forEach(nota => {
            soma += nota;
        });

        // Dica 6: Calculando a média usando .length
        let media = soma / notasComputadas.length;

        // Dica 7: Console.log conforme solicitado
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notasOrdenadas.join(",")}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); // Linha em branco para separar

        // --- Exibição Visual na Página ---
        const card = document.createElement('div');
        card.className = "atleta-card border-b border-gray-200 pb-4 last:border-0 mb-6";
        
        card.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Atleta: ${atleta.nome}</h2>
            <div class="card-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="notas-lista bg-gray-50 p-3 rounded">
                    <span class="text-xs font-bold text-gray-500 uppercase block">Notas Originais (Ordenadas)</span>
                    <span class="text-gray-700 font-mono">${notasOrdenadas.join(", ")}</span>
                </div>
                <div class="media-destaque bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                    <span class="text-xs font-bold text-blue-500 uppercase block">Média Válida</span>
                    <span class="text-2xl font-bold text-blue-800">${media.toFixed(6)}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    }
}

// Função para adicionar um novo atleta (funcionalidade extra)
function adicionarAtleta(nome, notas) {
    atletas.push({
        nome: nome,
        notas: notas
    });
    calcularMedias(atletas);
}

// Função para limpar todos os resultados
function limparResultados() {
    const container = document.getElementById('resultados');
    container.innerHTML = '<p class="text-gray-500 text-center py-8">Nenhum resultado para exibir</p>';
}

// Executar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    calcularMedias(atletas);
    
    // Exemplo de uso das funções extras (opcional)
    console.log("=== FUNÇÕES EXTRAS DISPONÍVEIS ===");
    console.log("adicionarAtleta('Novo Atleta', [8, 9, 7, 10, 8.5])");
    console.log("limparResultados()");
    console.log("calcularMedias(atletas)");
});

// Exportar funções para uso global (opcional)
window.calcularMedias = calcularMedias;
window.adicionarAtleta = adicionarAtleta;
window.limparResultados = limparResultados;
window.atletas = atletas;
