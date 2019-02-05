//Arquivo para tratativa de tudo relacionado ao formulário

//Função para montar o Objeto Paciente a partir dos dados passados pelo Form
obtemPaciente = (form) => {
    let paciente = {
        nome: form.nome.value, //O .value é referente ao value do campo input do form, ou seja, o conteúdo de texto do campo.
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        // imc: imc
        imc: calculaImc(form.peso.value,form.altura.value) //Usando a função para reaproveitamento do codigo com a logica do calculo do IMC.
    };

    return paciente; //Retorna o objeto montado
}

//Função para reaproveitamento do cógido com a logica para montar a td.
montaTd = (dado, classe) => {
    let td = document.createElement("td"); //Cria a td
    td.classList.add(classe); //Adiciona a classe do CSS à td.
    td.textContent = dado; //Adiciona o coneúdo de texto à td.

    return td; //Retorna a td montada
}

//Função para reaproveitamento do cógido com a logica para montar a tr.
montaTr = (paciente) => {
    const pacienteTr = document.createElement("tr"); //Cria a tr.
    pacienteTr.classList.add("paciente"); //Adiciona a classe do CSS à tr.

    //Bloco comentado pois utilizamos a função montaTd() direto dentro do parâmetro do appendChild() onde montamos a tr para economizar variável.
    // const nomeTd = montaTd(paciente.nome,"info-nome"); 
    // const pesoTd = montaTd(paciente.peso,"info-peso");
    // const alturaTd = montaTd(paciente.altura,"info-altura");
    // const gorduraTd = montaTd(paciente.gordura,"info-gordura");
    // const imcTd = montaTd(paciente.imc,"info-imc");

    //Bloco comentado pois codigo foi reutilizado através da função montaTd().
    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    //Bloco comentado pois utilizamos a função montaTd() direto dentro do parâmetro do appendChild() onde montamos a tr para economizar variável.
    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    //Bloco onde usamos a função montaTd() direto dentro do parâmetro do appendChild() onde montamos a tr para economizar variável.
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild( montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr; //Retona a tr montada
}


// let botao = document.querySelector("#adicionar-paciente"); Comentado pois estamos selecionando o botão junto com o evento de click.

//Evento de cliqk do botão.
document.querySelector("#adicionar-paciente").addEventListener("click", (xuxu) => {
    xuxu.preventDefault(); //Previne o comportamento padrão do formulário onde ao clicar recarrega a pagina e limpa os formulários.

    const form = document.querySelector("#form-adiciona"); //Selecionando nosso formulario para buscarmos os dados que precisamos para adicionar na tabela.

    // let paciente = obtemPaciente(form);  Comentado pois  utilizamos a função obtemPaciente() direto dentro do parâmetro da função montaTr().

    //Bloco comentado pois o cógio foi reutilizado no momento em que criamos o Objeto.
    // const nome = paciente.nome;
    // const peso = paciente.peso;
    // const altura = paciente.altura;
    // const gordura = paciente.gordura;
    // const imc = paciente.imc;

    // const pacienteTr = montaTr(paciente); Comentado pois chamamos a função montaTr() direto no parâmetro do appendChild() para economizar variável.

    //const tabela = document.querySelector("#tabela-pacientes"); Comentado pois estamos selecionando a tabela diretamente onde adicionamos a tr.

    document.querySelector("#tabela-pacientes").appendChild(montaTr(obtemPaciente(form))); //Selecionando a tabela e Adicionando a tr criada na tabela.

    form.reset(); //Funçao responsável por apagar os dados do form após serem adicionados sem erros na tabela.

});