document.addEventListener('DOMContentLoaded', function() {
    const cartinhas = document.querySelectorAll('.cartinha');
    const mensagemContainer = document.getElementById('mensagemContainer');
    
    // Função para obter a data atual como uma string no formato YYYY-MM-DD
    function obterDataAtual() {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda se necessário
        const dia = String(hoje.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
        return `${ano}-${mes}-${dia}`;
    }

    // Função para verificar quantas cartinhas foram abertas hoje
    function cartinhasAbertasHoje() {
        const dataAtual = obterDataAtual();
        const historico = JSON.parse(localStorage.getItem('historico') || '{}');
        return historico[dataAtual] || 0;
    }

    // Função para incrementar o contador de cartinhas abertas hoje
    function incrementarCartinhasAbertas() {
        const dataAtual = obterDataAtual();
        const historico = JSON.parse(localStorage.getItem('historico') || '{}');
        historico[dataAtual] = (historico[dataAtual] || 0) + 1;
        localStorage.setItem('historico', JSON.stringify(historico));
    }

    // Função para exibir a mensagem da cartinha
    function exibirMensagem(index) {
        const mensagens = [
            "Ana, você é a razão do meu sorriso!",
            "Ana, estou pensando em você!",
            "Ana, você ilumina meus dias!",
            "Ana, amo você mais a cada dia!",
            "Ana, você é incrível!",
            "Ana, seu sorriso ilumina meu dia!"
        

            // Adicione mais mensagens aqui, total de 50
        ];
        mensagemContainer.textContent = mensagens[index];
    }

    // Adicionar evento de clique a todas as cartinhas
    cartinhas.forEach(cartinha => {
        cartinha.addEventListener('click', function() {
            if (cartinhasAbertasHoje() < 5) {
                const index = this.getAttribute('data-index');
                exibirMensagem(index);
                incrementarCartinhasAbertas();
                this.style.pointerEvents = 'none'; // Desabilitar clique na cartinha já aberta
                this.style.opacity = '0.5'; // Visualizar que a cartinha foi aberta
            } else {
                mensagemContainer.textContent = "Ana, você já abriu 5 cartinhas hoje! Volte amanhã para mais surpresas!";
            }
        });
    });
});
