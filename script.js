// const corTexto = document.querySelector('.texto h1');

// const botaoPreto = document.getElementById('preto');
// const botaoBranco = document.getElementById('branco');
// const botaoAmarelo = document.getElementById('amarelo');
// const botaoVerde = document.getElementById('verde');
// const botaoAzul = document.getElementById('azul');
// const botaoVermelho = document.getElementById('vermelho');

// function mudarCor(corTexto, botaoPreto, botaoBranco, botaoAmarelo, botaoVerde, botaoAzul, botaoVermelho) {
//     botaoPreto.addEventListener('click', function() {
//         corTexto.style.color = '#121212';
//     });

//     botaoBranco.addEventListener('click', function() {
//         corTexto.style.color = '#dcdcdc';
//     });

//     botaoAmarelo.addEventListener('click', function() {
//         corTexto.style.color = '#d8cb55';
//     });

//     botaoVerde.addEventListener('click', function() {
//         corTexto.style.color = '#6bd855';
//     });

//     botaoAzul.addEventListener('click', function() {
//         corTexto.style.color = '#55a4d8';
//     });

//     botaoVermelho.addEventListener('click', function() {
//         corTexto.style.color = '#d85555';
//     });
// }

// mudarCor(corTexto, botaoPreto, botaoBranco, botaoAmarelo, botaoVerde, botaoAzul, botaoVermelho);

// A MANEIRA ACIMA É A QUE EU PENSEI, PORÉM, ELA É MAIS DEMORADA E NÃO É TÃO EFICIENTE.

// ================================================================================================
// ================================================================================================

// MANEIRA QUE O GITHUB COPILOT ME MOSTROU:

const corTexto = document.querySelector('.texto h1'); //Seleciona o h1 na div Texto

const botoes = document.querySelectorAll('.botoes button'); //Seleciona todos os buttons da div botoes
// eu vi q na verdade não importa a ordem (se o const botoes QuerySelectorAll vem antes ou depois do const cores), mas eu gosto de deixar assim porque é mais organizado pra mim


// As cores são os id's de cada botão, e depois tem a cor que vai ser colocada no texto
const cores = {
    preto: '#121212',
    branco: '#ffffffff',
    amarelo: '#d8cb55',
    verde: '#6bd855',
    azul: '#55a4d8',
    vermelho: '#d85555'
};


//Basicamente, a const botoes pega cada um dos botões individialmente (a var botao é criada dentro do forEach), adiciona um EventListener de click nele e uma função 
// onde a variavel cor recebe a variavel cores e pega o botão com o id de cada cor. E se a cor existir ele muda a cor do texto para a cor selecionada.
botoes.forEach(botao => {
    botao.addEventListener('click',() => {
        const cor = cores[botao.id];
        if (cor) {
            corTexto.style.color = cor;
        }
    });
});
