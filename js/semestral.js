const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");

btnVoltar.addEventListener("click", voltar);
btnAvancar.addEventListener("click", avancar);

function voltar(){
    window.location.href = "anual.html";
}

function avancar(){
    window.location.href = "mensal.html";
}
document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "../index.html";
});