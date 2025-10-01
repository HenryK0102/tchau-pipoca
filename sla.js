// main.js

const brainrotGame = {
    "start": {
        titulo: "Fase 1: O Tubarão Dançarino (Tralalero Tralalá)",
        texto: "Você precisa passar pelo Tralalero Tralalá.",
        opcoes: [
            {
                texto: "A. Fuga na Rizz: Deslize, gritando: \"Você é o GOAT, Tralalero! Não me taxe!\" (Elogio/Distração).",
                proximo: "2.1"
            },
            {
                texto: "B. Ataque de Coerência: Jogue um relatório financeiro chato no caminho do Tubarão (Burocracia).",
                proximo: "2.2"
            }
        ]
    },
    
    // --- Fase 2 (Rotas 2.1 e 2.2 levam a 3.1 e 3.2) ---
    "2.1": {
        titulo: "Fase 2: O Crocodilo Aéreo (Bombardiro Crocodilo)",
        texto: "O Tubarão se distrai, mas um crocodilo voador aparece. Você tem que fugir. Onde correr?",
        opcoes: [
            {
                texto: "A. Para a Floresta da Tamborada: Siga o som do Tung Tung Tung Sahur.",
                proximo: "3.1"
            },
            {
                texto: "B. Para o Beco do Skibidi: Entre na passagem escura com televisões cantantes.",
                proximo: "3.2"
            }
        ]
    },
    "2.2": {
        titulo: "Fase 2: O Crocodilo Aéreo (Bombardiro Crocodilo)",
        texto: "O relatório atinge o Tubarão, mas um crocodilo voador aparece. Você tem que fugir. Onde correr?",
        opcoes: [
            {
                texto: "A. Para a Floresta da Tamborada: Siga o som do Tung Tung Tung Sahur.",
                proximo: "3.1"
            },
            {
                texto: "B. Para o Beco do Skibidi: Entre na passagem escura com televisões cantantes.",
                proximo: "3.2"
            }
        ]
    },

    // --- Fase 3 (Floresta da Tamborada) ---
    "3.1": {
        titulo: "Fase 3: O Guardião do Ritmo (Floresta da Tamborada)",
        texto: "O Tung Tung Tung Sahur bloqueia seu caminho. Como acalmá-lo?",
        opcoes: [
            {
                texto: "A. A Senha do Conhecedor: Grite: \"Lirilì Larilà Boneca Ambalabu!\" (Meme de credibilidade).",
                proximo: "4.1"
            },
            {
                texto: "B. Distração Nutricional: Jogue um pedaço de pizza congelada no chão.",
                proximo: "4.2"
            }
        ]
    },

    // --- Fase 3 (Purgatório do Jargão) ---
    "3.2": {
        titulo: "Fase 3: O Purgatório do Jargão (Beco do Skibidi)",
        texto: "Você está cercado por vídeos incessantes. Como manter o foco?",
        opcoes: [
            {
                texto: "A. Meditação Focada: Feche os olhos, concentre-se na respiração e ignore o caos.",
                proximo: "4.3"
            },
            {
                texto: "B. Imersão Controlada: Assista a uma das telas por 5 segundos (Tentativa de \"hackear\" o Brainrot).",
                proximo: "4.4"
            }
        ]
    },

    // --- Fase 4 (Chegada ao Nexo - Introduções) ---
    "4.1": {
        titulo: "Fase 4: A Chegada ao Nexo",
        texto: "O Sahur o reconhece como um conhecedor e o envia diretamente para o Nexo Tralalero. Você enfrenta a fonte de todo o Brainrot. Como reagir?",
        opcoes: [
            {
                texto: "A. Negociação: Ofereça ao Cérebro-Meme Mestre a aposentadoria e um meme coin infinito.",
                proximo: "Final 1"
            },
            {
                texto: "B. Traição Final: Ataque-o com uma explicação detalhada sobre a inflação.",
                proximo: "Final 2"
            }
        ]
    },
    "4.2": {
        titulo: "Fase 4: A Chegada ao Nexo",
        texto: "O Sahur come a pizza, pega você pela mão e o acompanha até o Nexo Tralalero. Vocês enfrentam a fonte de todo o Brainrot. Como reagir?",
        opcoes: [
            {
                texto: "A. Ataque Conjunto: Ataque o trono com um \"Brr Brr Patapim!\" coordenado.",
                proximo: "Final 3"
            },
            {
                texto: "B. Declaração de Lealdade: Ajoelhe-se e declare: \"Serei o novo RIZZ GURU.\"",
                proximo: "Final 4"
            }
        ]
    },
    "4.3": {
        titulo: "Fase 4: A Chegada ao Nexo",
        texto: "Você escapou meditando. Sua sanidade está intacta, mas a realidade está se desfazendo no Nexo. Como agir?",
        opcoes: [
            {
                texto: "A. Pulo de Fé: Pule no buraco temporal que se abriu.",
                proximo: "Final 5"
            },
            {
                texto: "B. Sacrifício da Sanidade: Jogue sua carteira de identidade e documentos oficiais no Mestre.",
                proximo: "Final 6"
            }
        ]
    },
    "4.4": {
        titulo: "Fase 4: A Chegada ao Nexo",
        texto: "Você perdeu a memória após a imersão. Seu corpo age por puro instinto meme. O que você faz?",
        opcoes: [
            {
                texto: "A. O Gesto Vazio: Faça o gesto de \"Fanum Tax\".",
                proximo: "Final 7"
            },
            {
                texto: "B. Dança Aleatória: Comece uma dança totalmente nova e sem ritmo.",
                proximo: "Final 8"
            }
        ]
    },
    
    // --- FINAIS ---
    "Final 1": {
        titulo: "FIM 1: Aposentadoria Dourada",
        texto: "Você salva o mundo com meme coin e se torna o gerente do fundo. O Brainrot é substituído por estabilidade financeira e gatos no TikTok.",
        final: true
    },
    "Final 2": {
        titulo: "FIM 2: Colapso Econômico",
        texto: "A coerência fiscal destrói o Brainrot, mas causa uma recessão global. O mundo está são, mas pobre. Você se torna o vilão que ninguém entendeu.",
        final: true
    },
    "Final 3": {
        titulo: "FIM 3: Dupla Inseparável",
        texto: "Você e o Tung Tung Tung Sahur se tornam heróis, vivendo de batalhas de rap contra a entropia do conteúdo. O Brainrot é controlado pelo ritmo.",
        final: true
    },
    "Final 4": {
        titulo: "FIM 4: O Novo Lorde",
        texto: "Você é coroado RIZZ GURU DO NEXO. Você não detém o Brainrot, você o MASTERIZA e cria Brainrots para sempre. O ciclo continua, mas agora é seu.",
        final: true
    },
    "Final 5": {
        titulo: "FIM 5: Viajante Esquecido",
        texto: "Você salta para um futuro sem Brainrot. O mundo é chato, mas funcional. Ninguém te conhece ou se importa com sua história de \"Tralalero\".",
        final: true
    },
    "Final 6": {
        titulo: "FIM 6: Vitória Burocrática",
        texto: "A papelada destrói o Mestre, que não consegue lidar com a complexidade. Você se torna um burocrata e garante que NENHUM meme seja ilegal.",
        final: true
    },
    "Final 7": {
        titulo: "FIM 7: O Parasita",
        texto: "Seu gesto de Fanum Tax o anexa ao trono. Você é o novo rosto do caos e a personificação do imposto de roubar comida. O mundo está em apuros.",
        final: true
    },
    "Final 8": {
        titulo: "FIM 8: O Novo Ritmo",
        texto: "Sua dança ruim causa um Brainrot pior, mas também destrói o Mestre. O mundo está curado, mas agora dança de forma estranha e errática.",
        final: true
    }
    // Deixei o 9 e 10 de fora por serem Finais Secretos/Fim de Jogo complexos.
};

// Elementos do DOM
const historiaEl = document.getElementById('historia');
const tituloFaseEl = document.getElementById('titulo-fase');
const opcoesContainerEl = document.getElementById('opcoes-container');
const finalJogoEl = document.getElementById('final-jogo');

// Função para iniciar ou exibir uma nova fase
function exibirFase(faseId) {
    const fase = brainrotGame[faseId];
    
    // Limpa os elementos
    opcoesContainerEl.innerHTML = '';
    finalJogoEl.style.display = 'none';

    // Se a fase for um final, exibe o resultado
    if (fase.final) {
        tituloFaseEl.textContent = fase.titulo;
        historiaEl.textContent = fase.texto;
        
        finalJogoEl.textContent = "FIM DE JOGO!";
        finalJogoEl.style.display = 'block';

        // Cria um botão de Recomeçar
        const recomecarBtn = document.createElement('button');
        recomecarBtn.textContent = 'Recomeçar Missão';
        recomecarBtn.classList.add('opcao-btn');
        recomecarBtn.onclick = () => exibirFase('start');
        opcoesContainerEl.appendChild(recomecarBtn);
        return;
    }

    // Atualiza o texto e título da fase
    tituloFaseEl.textContent = fase.titulo;
    historiaEl.textContent = fase.texto;

    // Cria os botões de opção
    fase.opcoes.forEach(opcao => {
        const btn = document.createElement('button');
        btn.textContent = opcao.texto;
        btn.classList.add('opcao-btn');
        btn.onclick = () => exibirFase(opcao.proximo); // Define o que acontece ao clicar
        opcoesContainerEl.appendChild(btn);
    });
}

// Inicia o jogo
exibirFase('start');