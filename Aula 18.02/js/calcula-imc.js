//Arquivo para tratativa de tudo relacionado à tabela

document.querySelector("#titulo").textContent = "Xuxu"; //Alterando o título da pagina

// let paciente = document.querySelector("#primeiro-paciente");     Usamos apenas quando fizemos teste com apenas o primeiro paciente

const pacientes = document.querySelectorAll(".paciente"); //Selecionando todos os pacientes da tabela e ccolocando em um Array

//Função criada para reproveitamento do codigo com a logica para o calculo do IMC.
calculaImc = (peso, altura) => {
    let imc = peso / (altura * altura); //Calcula o IMC
    return imc.toFixed(2); //Retorna o valor do IMC arredondando o resultado para 2 casas decimentos
}

validaPeso = (peso) => {
    if (peso >= 0 && peso <= 400) {
        return true;
    } else {
        return false;
    }
}

validaAltura = (altura) => {
    if (altura >= 0 && altura <= 3) {
        return true;
    }else{
        return false;
    }
}

for (let i = 0; i < pacientes.length; i++) { //Iteração na tabela

    let paciente = pacientes[i]; //Selecionando o paciente pelo indice da Array

    let pesoTd = paciente.querySelector(".info-peso"); //Selecionando a linha que contém o peso do paciente
    let peso = pesoTd.textContent; //Armazenando o peso do paciente

    let alturaTd = paciente.querySelector(".info-altura"); //Selecionando a linha que contém a altura do paciente
    let altura = alturaTd.textContent; //Armazenando a altura do paciente

    let imcTd = paciente.querySelector(".info-imc"); //Selecionando a linha que contém o imc do paciente

    let alturaEhValida = validaAltura(altura); //Variável criada para auxiliar a validação dos dados inseridos na tabela.
    let pesoEhValido = validaPeso(peso); //Variável criada para auxiliar a validação dos dados inseridos na tabela.

    //if (peso <= 0 || peso >= 400) { //Condicional validando se o peso do paciente é válido
    if(!pesoEhValido){
        pesoEhValido = false; //Alterando o valor da variável de validação
        imcTd.textContent = "Peso inválido!" //Alterando texto para mostrar erro.
        // paciente.style.backgroundColor = "lightcoral";  Temos essa forma de mudar estilo porém não é uma boa pratica fazer dessa forma
        paciente.classList.add("paciente-invalido"); //Adicionando uma classe de CSS para alterar o estilo da linha e evidenciar o erro. Boas práticas.
    }

    //if (altura <= 0 || altura >= 3) { Condicional validando se a altura do paciente é válida
    if(!alturaEhValida){
        alturaEhValida = false; //Alterando o valor da variável de validação
        imcTd.textContent = "Altura inválida!" //Alterando texto para mostrar erro.
        // paciente.style.backgroundColor = "lightcoral";  Temos essa forma de mudar estilo porém não é uma boa pratica fazer dessa forma
        paciente.classList.add("paciente-invalido"); // Adicionando uma classe de CSS para alterar o estilo da linha e evidenciar o erro. Boas práticas.
    }

    if (alturaEhValida && pesoEhValido) { //Caso a altura e peso informados forem válidos, será feito o calculo do IMC

        //let imc = peso / (altura * altura); COmentado pois estamos realizando o calculo através da função calculaImc().
        imcTd.textContent = calculaImc(peso, altura); //Alterando o texto informando o IMC e fixando seu valor com no máximo 2 casas decimais.
    }

}