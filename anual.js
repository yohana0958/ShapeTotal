const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");

btnVoltar.addEventListener("click", voltar);
btnAvancar.addEventListener("click", avancar);

function voltar(){
    window.location.href = "mensal.html";
}

function avancar(){
    window.location.href = "semestral.html";
}
document.getElementById("btnVoltar").addEventListener("click", () => {
    window.location.href = "../index.html";
});