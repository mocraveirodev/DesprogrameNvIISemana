window.onload = () => {
    mostraPacientes();
}

pegaPacientes = () => {
    return data["pacientes"];
}

mostraPacientes = () => {
    for (paciente of pegaPacientes()) {
        document.querySelector("#tabela-pacientes").innerHTML += "<tr class='paciente'>"
        + "<td class='info-nome'>" + paciente['nome'] + "</td>"
        + "<td class='info-peso'>" + paciente['peso'] + "</td>"
        + "<td class='info-altura'>" + paciente['altura'] + "</td>"
        + "<td class='info-gordura'>" + paciente['gordura'] + "</td>"
        + "<td class='info-imc'>" + paciente['imc'] + "</td>"
    + "</tr>"
    }
}


// "<tr class='paciente'>"
//     + "<td class='info-nome'>" + paciente['nome'] + "</td>"
//     + "<td class='info-peso'>" + paciente['peso'] + "</td>"
//     + "<td class='info-altura'>" + paciente['altura'] + "</td>"
//     + "<td class='info-gordura'>" + paciente['gordura'] + "</td>"
//     + "<td class='info-imc'>" + paciente['imc'] + "</td>"
// + "</tr>"