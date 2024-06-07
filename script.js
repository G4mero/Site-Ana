document.addEventListener('DOMContentLoaded', function() {
    const cartinhas = document.querySelectorAll('.cartinha');
    const mensagemContainer = document.getElementById('mensagemContainer');
    const contadorContainer = document.getElementById('contadorContainer');
    const MAX_CARTINHAS_POR_DIA = 5;

    const mensagens = [
        "Ana, você é a razão do meu sorriso!",
        "Ana, estou pensando em você!",
        "Ana, você ilumina meus dias!",
        "Ana, amo você mais a cada dia!",
        "Ana, você é incrível!",
        "Ana, você é a minha inspiração.",
        "Ana, você me faz feliz.",
        "Ana, você é a luz da minha vida.",
        "Ana, estou sempre aqui para você.",
        "Ana, cada dia com você é uma bênção.",
        "Ana, você é o meu amor eterno.",
        "Ana, você me completa.",
        "Ana, você é a melhor parte de mim.",
        "Ana, você me faz acreditar no amor verdadeiro.",
        "Ana, estou grato por ter você na minha vida.",
        "Ana, você é a minha razão de viver.",
        "Ana, seu amor me faz mais forte.",
        "Ana, você é meu tudo.",
        "Ana, você faz meu coração bater mais forte.",
        "Ana, você é a pessoa mais incrível que eu conheço.",
        "Ana, te amo mais do que palavras podem dizer.",
        "Ana, você é minha alma gêmea.",
        "Ana, com você ao meu lado, tudo é possível.",
        "Ana, cada momento com você é precioso.",
        "Ana, você é a minha felicidade.",
        "Ana, estou sempre pensando em você.",
        "Ana, você é o meu grande amor.",
        "Ana, você é meu sonho realizado.",
        "Ana, eu amo você.",
        "Ana, você é a pessoa mais especial do mundo.",
        "Ana, você é a razão de eu sorrir todos os dias.",
        "Ana, você me faz uma pessoa melhor.",
        "Ana, seu amor é tudo para mim.",
        "Ana, com você, a vida é mais doce.",
        "Ana, você é meu anjo.",
        "Ana, você é minha rainha.",
        "Ana, estou apaixonado por você.",
        "Ana, você é minha princesa.",
        "Ana, você é meu raio de sol.",
        "Ana, eu te amo de todo o coração.",
        "Ana, você é a razão da minha existência.",
        "Ana, você é minha paz.",
        "Ana, você é minha alegria.",
        "Ana, você é meu refúgio.",
        "Ana, você é minha esperança.",
        "Ana, você é meu amor.",
    ];

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
        mensagemContainer.textContent = mensagens[index];
    }

    // Função para atualizar o contador de cartinhas abertas hoje
    function atualizarContadorCartinhasAbertas() {
        const cartinhasAbertas = cartinhasAbertasHoje();
        contadorContainer.textContent = `Você abriu ${cartinhasAbertas} de ${MAX_CARTINHAS_POR_DIA} cartinhas hoje.`;
        if (cartinhasAbertas >= MAX_CARTINHAS_POR_DIA) {
            mensagemContainer.textContent = "Você já viu todas as cartinhas do dia! Volte amanhã para mais surpresas.";
        }
    }

    // Adicionar evento de clique a todas as cartinhas
    cartinhas.forEach(cartinha => {
        cartinha.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const cartinhasAbertas = cartinhasAbertasHoje();

            if (this.style.pointerEvents === 'none' || cartinhasAbertas < MAX_CARTINHAS_POR_DIA) {
                exibirMensagem(index);
                if (this.style.pointerEvents !== 'none') {
                    incrementarCartinhasAbertas();
                }
                atualizarContadorCartinhasAbertas();
                this.style.pointerEvents = 'none'; // Desabilitar clique na cartinha já aberta
                this.style.opacity = '0.5'; // Visualizar que a cartinha foi aberta
            }
        });
    });

    // Atualizar o contador de cartinhas abertas ao carregar a página
    atualizarContadorCartinhasAbertas();

    // Modal para galeria
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.galeria-foto').forEach(foto => {
        foto.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// Função para abrir uma aba
function openTab(evt, tabName) {
    // Esconder todos os conteúdos das abas
    const tabcontents = document.querySelectorAll('.tabcontent');
    tabcontents.forEach(content => {
        content.style.display = 'none';
    });

    // Remover a classe 'active' de todos os links das abas
    const tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach(link => {
        link.className = link.className.replace(' active', '');
    });

    // Mostrar o conteúdo da aba atual e adicionar uma classe 'active' ao link da aba
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Mostrar a aba "Cartinhas" por padrão
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablink').click();
});