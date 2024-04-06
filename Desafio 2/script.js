// Jogador Atual vai começar com X
let jogadorAtual = 'X';
let quadro = ['', '', '', '', '', '', '', '', ''];
let ativo = true;
let nJogadasX = [];
let nJogadasO = [];

const ganhos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

function verifica(index) {

    if (!quadro || quadro[index] !== '') return;

    quadro[index] = jogadorAtual;
    document.getElementsByClassName('celula')[index].innerText = jogadorAtual;

    if (jogadorAtual === 'X') {
        
        // Caso o jogador for X
        nJogadasX.push(index);
        if (nJogadasX.length > 3) {

            // Método Shift remove o primeiro elemento da lista, fazendo assim eleminir a primeira jogada do jogador
            let removerIndex = nJogadasX.shift();
            // Removendo o index do quadro
            quadro[removerIndex] = '';
            // Deixando o index em branco, ou seja, removendo ele do quadro
            document.getElementsByClassName('celula')[removerIndex].innerText = '';
        }
    } else {

        // Caso o jogador for O
        nJogadasO.push(index);
        if (nJogadasO.length > 3) {
            let removerIndex = nJogadasO.shift();
            quadro[removerIndex] = '';
            document.getElementsByClassName('celula')[removerIndex].innerText = '';
        }
    }
 
    // Caso ganhou
    if (verificaGanhou()) {
        ativo = false;
        document.getElementById('jogador_atual').innerText = `${jogadorAtual} ganhou!`;
        return;
    }
    
    // Caso deu velha
    if (!quadro.includes('')) {
        ativo = false;
        document.getElementById('jogador_atual').innerText = 'Deu Velha';
        return;
    }

    // Mostrar na tela a vez de quem é
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    document.getElementById('jogador_atual').innerText = `Vez do Jogador ${jogadorAtual}`;
    document.getElementById('log').innerText = `Jogador ${jogadorAtual} jogou nas seguintes coordenadas ${nJogadasX}`;
}

function verificaGanhou() {
    for (let z of ganhos) {
        const [a, b, c] = z;
        if (quadro[a] !== '' && quadro[a] === quadro[b] && quadro[a] === quadro[c]) {
            return true;
        }
    }
    return false;
}

function resetar() {
    window.location.reload();
}
