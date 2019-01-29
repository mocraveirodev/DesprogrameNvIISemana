document.querySelector("#titulo").textContent = "Xuxu"; //Alterando o título da pagina

// let paciente = document.querySelector("#primeiro-paciente");     Usamos apenas quando fizemos teste com apenas o primeiro paciente

const pacientes = document.querySelectorAll(".paciente"); //Selecionando todos os pacientes da tabela e ccolocando em um Array

for (let i = 0; i < pacientes.length; i++) { //Iteração na tabela

    let paciente = pacientes[i]; //Selecionando o paciente pelo indice da Array

    let pesoTd = paciente.querySelector(".info-peso"); //Selecionando a linha que contém o peso do paciente
    let peso = pesoTd.textContent; //Armazenando o peso do paciente

    let alturaTd = paciente.querySelector(".info-altura"); //Selecionando a linha que contém a altura do paciente
    let altura = alturaTd.textContent; //Armazenando a altura do paciente

    let imcTd = paciente.querySelector(".info-imc"); //Selecionando a linha que contém o imc do paciente

    let alturaEhValida = true; //Variável criada para auxiliar a validação dos dados inseridos na tabela.
    let pesoEhValido = true; //Variável criada para auxiliar a validação dos dados inseridos na tabela.

    if (peso <= 0 || peso >= 400) { //Condicional validando se o peso do paciente é válido
        pesoEhValido = false; //Alterando o valor da variável de validação
        imcTd.textContent = "Peso inválido!" //Alterando texto para mostrar erro.
        // paciente.style.backgroundColor = "lightcoral";  Temos essa forma de mudar estilo porém não é uma boa pratica fazer dessa forma
        paciente.classList.add("paciente-invalido"); //Adicionando uma classe de CSS para alterar o estilo da linha e evidenciar o erro. Boas práticas.
    }

    if (altura <= 0 || altura >= 3) { //Condicional validando se a altura do paciente é válida
        alturaEhValida = false; //Alterando o valor da variável de validação
        imcTd.textContent = "Altura inválida!" //Alterando texto para mostrar erro.
        // paciente.style.backgroundColor = "lightcoral";   Temos essa forma de mudar estilo porém não é uma boa pratica fazer dessa forma
        paciente.classList.add("paciente-invalido"); //Adicionando uma classe de CSS para alterar o estilo da linha e evidenciar o erro. Boas práticas.
    }

    if (alturaEhValida && pesoEhValido) { //Caso a altura e peso informados forem válidos, será feito o calculo do IMC

        let imc = peso / (altura * altura); //Calculando o IMC e armazenando
        imcTd.textContent = imc.toFixed(2); //Alterando o texto informando o IMC e fixando seu valor com no máximo 2 casas decimais.
    }

}