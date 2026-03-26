
let reservaAtual = null;

function agendar() {
    if (reservaAtual) {
        alert("Você já tem uma aula agendada! Use o botão reagendar.");
        return;
    }

    const dia = "Segunda-feira";
    const horario = document.getElementById("horario").value;

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    reservaAtual = document.createElement("div");
    reservaAtual.innerHTML = `
        <p>Dia: ${dia}</p>
        <p>Horário: ${horario}</p>
    `;

    lista.appendChild(reservaAtual);
}

function reagendar() {
    const dia = "Segunda-feira";
    const horario = document.getElementById("horario").value;

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    reservaAtual = document.createElement("div");
    reservaAtual.innerHTML = `
        <p>Dia: ${dia}</p>
        <p>Horário: ${horario}</p>
    `;

    lista.appendChild(reservaAtual);
}