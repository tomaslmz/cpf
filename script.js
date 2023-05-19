$(document).ready(function () {
    $("#verificar").mask("000.000.000-00");
});

function gerar() {
    var numeros = Array(10);


    for(let i = 0; i<9; i++) {
        numeros[i] = parseInt(Math.random() * (9 - 0) + 0);
    }

    var comparador = numeros[0];

    var cpfSoma = eval(numeros[0] * 1 + numeros[1] * 2 + numeros[2] * 3 + numeros[3] * 4 + numeros[4] * 5 + numeros[5] * 6 + numeros[6] * 7 + numeros[7] * 8 + numeros[8] * 9);


    numeros[9] = cpfSoma%11;

    if(numeros[9] == 10) {
        numeros[9] = 0;
    }

    //Passo 2

    var cpfSoma2 = eval(numeros[0] * 0 + numeros[1] * 1 + numeros[2] * 2 + numeros[3] * 3 + numeros[4] * 4 + numeros[5] * 5 + numeros[6] * 6 + numeros[7] * 7 + numeros[8] * 8 + numeros[9] * 9);

    if(cpfSoma2%11 == 10) {
        numeros[10] = 0;
    } else {
        numeros[10] = cpfSoma2%11;
    }

    const cpfgerador = document.getElementById("gerar");

    let cpf = "";

    for(let i = 0; i<11; i++) {
        cpf += numeros[i].toString();
    }

    const checkinput = document.getElementById("check");

    if(checkinput.checked) {
        cpf = cpf.replace(/\D/g, ''); // remove qualquer caractere não numérico
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona o primeiro ponto separador
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona o segundo ponto separador
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    cpfgerador.value = cpf;
}

function verificar() {
    const cpfvalidar = document.getElementById("verificar");
    let cpf = cpfvalidar.value;

    cpf = cpf.replaceAll(".", "");
    cpf = cpf.replaceAll("-", "");

    if(cpf.length == 11) {
        var numeros = cpf.split("");
        var comparador = numeros[0];
    
        //for(var i = 0; i<10; i++) {
            //if(numeros[i] == numeros[i+1]) {
                //iguais++;
            //}
        //}

        //Passo 1



        var cpfSoma = eval(numeros[0] * 1 + numeros[1] * 2 + numeros[2] * 3 + numeros[3] * 4 + numeros[4] * 5 + numeros[5] * 6 + numeros[6] * 7 + numeros[7] * 8 + numeros[8] * 9);

        var cpfResto = cpfSoma%11;

        if(cpfResto == 10) {
            cpfResto = 0;
        }

        //Passo 2

        var cpfSoma2 = eval(numeros[0] * 0 + numeros[1] * 1 + numeros[2] * 2 + numeros[3] * 3 + numeros[4] * 4 + numeros[5] * 5 + numeros[6] * 6 + numeros[7] * 7 + numeros[8] * 8 + numeros[9] * 9);

        var cpfResto2 = cpfSoma2%11;

        //console.log(cpfSoma);

        //console.log(cpfResto);

        //console.log(cpfResto2);
        const mensagem = document.getElementById("resultado");

        

        if(cpfResto == numeros[9] && cpfResto2 == numeros[10] && !numeros.every(el =>(el === comparador))) {
            mensagem.innerHTML = "É VÁLIDO";
            mensagem.style.color = "green";
            mensagem.style.display = "block";
        } else if(!numeros.every(el =>(el === comparador))) {
            mensagem.innerHTML = "NÃO É VÁLIDO"
            mensagem.style.color = "red";
            mensagem.style.display = "block";
        } else {
            alert("Digite um CPF válido!");
        }
    } else {
        alert("Digite um CPF válido!");
    }
}

function copiar() {
    const texto = document.getElementById("gerar");

    texto.select();
    texto.setSelectionRange(0, 9999);
    document.execCommand("copy");
}
