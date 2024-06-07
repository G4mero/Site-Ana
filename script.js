document.getElementById('verMensagemBtn').addEventListener('click', function() {
    const mensagemContainer = document.getElementById('mensagemContainer');
    
    function obterDataAtual() {
        const hoje = new Date();
        return hoje.getFullYear() + '-' + (hoje.getMonth() + 1) + '-' + hoje.getDate();
    }

    function mensagemVistaHoje() {
        return localStorage.getItem('ultimaVisita') === obterDataAtual();
    }

    function exibirMensagem() {
        const mensagens = [
            "Ana, você é a razão do meu sorriso!",
            "Ana, estou pensando em você!",
            "Ana, você ilumina meus dias!",
            "Ana, amo você mais a cada dia!",
            "Ana, você é incrível!",
            // Adicione mais mensagens aqui
        ];
        
        const indiceMensagem = new Date().getDate() % mensagens.length;
        mensagemContainer.textContent = mensagens[indiceMensagem];
        localStorage.setItem('ultimaVisita', obterDataAtual());
    }

    if (mensagemVistaHoje()) {
        mensagemContainer.textContent = "Ana, você já viu a mensagem de hoje! Volte amanhã para mais uma surpresa!";
    } else {
        exibirMensagem();
    }
});
