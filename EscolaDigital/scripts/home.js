let usuarios = []
let logado

if (localStorage.getItem('cadastrados')){
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

if (localStorage.getItem('atualmenteLogado')){
    logado = JSON.parse(localStorage.getItem('atualmenteLogado'))
}

document.getElementById("valorCantina").innerHTML = "Seu saldo é de R$" + usuarios[logado].saldo;
document.getElementById("porPres").innerHTML = "Você estava em " + usuarios[logado].presenca + " das aulas.";
document.getElementById("turma").innerHTML = usuarios[logado].turma;

function btnSair() {
    localStorage.removeItem("atualmenteLogado");
    location.assign('../index.html')
}