obtemPaciente = (form) => {
    let paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    };

    return paciente;
}

document.querySelector("#adicionar-paciente").addEventListener("click", (xuxu) => {
    xuxu.preventDefault();

    const form = document.querySelector("#form-adiciona");

    let paciente = obtemPaciente(form);

    // const nome = paciente.nome;
    // const peso = paciente.peso;
    // const altura = paciente.altura;
    // const gordura = paciente.gordura;
    // const imc = paciente.imc;

    const pacienteTr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


});