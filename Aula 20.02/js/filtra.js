document.querySelector("#filtrar-tabela").addEventListener("input", function () {
    const pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let nome = paciente.querySelector(".info-nome").textContent;

            if (this.value != nome) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});