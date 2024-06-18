let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumero();
let tentativas = 1;
function exibirTextoNaTela(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate : 1.2});}
function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 100' );
}
exibirMensagemInicial();
function gerarNumero() {
    let numeroEscolhido =  parseInt(Math.random() * 100 + 1 );
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    }
        else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    }
function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(numeroSecreto == chute){
        exibirTextoNaTela('h1','Parabéns!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        exibirTextoNaTela('h1','Tente novamente!');
        if(numeroSecreto < chute){
            exibirTextoNaTela('p','O número secreto é menor!');
        }
        else{
            exibirTextoNaTela('p','O número secreto é maior!');
        }
    tentativas++;
    limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}