let nome;
let idade;
let profissao;

function exercicio1(){
    nome = prompt('Informe seu nome: ');
    idade = prompt('Informe sua idade: ');
    profissao = prompt('Informe sua profissão: ');

    alert(` Seja bem-vinde, ${nome}!\n Você tem ${idade} anos de idade\n Sua profissão é: ${profissao}`)
}

let valor;
let quantidade;

function exercicio2() {
    valor = prompt('Informe o valor do produto: ');
    quantidade = prompt('Informe a quantidade: ');

    let total = valor*quantidade;
    alert(`O total da compra é: ${total}`);
}

// Função do exercício 3 sem solução ainda
function contagemRegressiva() {
    let valorInicial = prompt("Digite um número para iniciar a contagem regressiva: ");

    // Verifica se o valor fornecido é um número válido
    if (isNaN(valorInicial)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    valorInicial = parseInt(valorInicial); // Converte o valor para um número inteiro

    // Verifica se o valor é positivo
    if (valorInicial <= 0) {
        alert("Por favor, insira um número positivo maior que zero.");
        return;
    }

    // Função de contagem regressiva
    function iniciarContagem(numero) {
        if (numero === 0) {
            console.log("Lançamento!");
            document.getElementById('contagem').innerHTML = 'Lançamento!'
            return;
        }

        console.log(numero);
        document.getElementById('contagem').innerHTML = numero;
        setTimeout(function() {
            iniciarContagem(numero - 1); // Chamada recursiva com o número decrementado
        }, 1000); // 1000 milissegundos = 1 segundo
    }

    iniciarContagem(valorInicial); // Inicia a contagem regressiva
}



// xxxxxxxxxxxxxxxxxxxxx


let numTab;
let listaTabuada;

function exercicio4() {
    numTab = prompt('Informe um número: ');

    // Obtendo o elemento onde queremos inserir a tabuada
    const tabuadaParagrafo = document.getElementById('tabuada');

    // Criando título para a tabuada
    const tituloTabuada = document.createElement('h3');
    tituloTabuada.textContent = `Tabuada do número ${numTab}`;
    tabuadaParagrafo.appendChild(tituloTabuada);

    // Criando lista ordenada para a tabuada
    listaTabuada = document.createElement('dl');

    for (let index = 1; index < 11; index++) {
        const itemLista = document.createElement('dt');
        itemLista.textContent = `${numTab} x ${index} = ${numTab*index}`;
        listaTabuada.appendChild(itemLista);
    }    
    
    // Adicionando a lista ordenada ao parágrafo
    tabuadaParagrafo.appendChild(listaTabuada);

}

let contador = 0;
function exercicio5() {
    contador++;
    document.getElementById("contaCliques").innerHTML = contador;
}

function validateForm() {
    // Obtendo os valores dos campos do formulário
    var nome = document.forms["dadosForm"]["fnome"].value;
    var email = document.forms["dadosForm"]["fmail"].value;
    var senha = document.forms["dadosForm"]["fsenha"].value;

    // Verificando se os campos estão vazios
    if (nome == "" || email == "" || senha == "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário se algum campo estiver vazio
    }

    // Validando o formato do email usando uma expressão regular simples
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false; // Impede o envio do formulário se o formato do email for inválido
    }

    // Validando a senha - por exemplo, garantindo que tenha pelo menos 6 caracteres
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false; // Impede o envio do formulário se a senha for muito curta
    }

    // Se todos os campos estiverem preenchidos corretamente, o formulário é enviado
    return true;
}


function exercicio7(){
    let numeroF = document.getElementById('numeroDigitado').value;
    let index = numeroF-1;
    let soma = numeroF;

    do {
        soma = soma * index;    
        index--;
    } while(index > 0);

    console.log(soma);
    const respostaFatorial = document.getElementById('texto');
    respostaFatorial.textContent = `O fatorial de ${numeroF} é: ${soma}`;
    
}

// Exercício 8

let listaTarefas = ['sair', 'dormir','escrever', 'ler'];

function adicionarTarefa() {
    listaTarefas.push(document.getElementById('novaPalavra').value);
    console.log(listaTarefas.toString());
}

function removerTarefa() {
    let num = document.getElementById('indexVetor').value;
    console.log(num);
    listaTarefas.splice(num,1);
    console.log(listaTarefas.toString());

}

function listarTarefas() {

    let lista = document.getElementById('mostraLista'); //indica onde será criado o elemento

    const tituloLista = document.createElement('h3');
    tituloLista.textContent = 'Lista de Tarefas Atual';
    lista.appendChild(tituloLista);


    listaTarefas.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li); //adiciona o elemento criado dentro do elemento em "lista"
    });
        
}