
/*funcao para recuperar os numeros do html usando DOM*/function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);  //value para pegar o valor, sem o value ele so iria devolver a tag html 
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate){
        alert('campo "Do numero" deve ser inferior ao campo "Ate o numero". Verefique!');
        return;
    }

    if(quantidade > (ate - de + 1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique')
        return;
    }

    
//parseInt para aceitarf somente numeros inteiro. 

    /*array*/let sorteados =[];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);


        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter numero inedito');
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    //innerHTML e para inserir ou alterar o conteudo HTML de um elemento.

    alterarStatusBotao()

}
/*funcao para sortear usando o math.random*/function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}