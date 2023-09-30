let usuarios = []

if (localStorage.getItem('cadastrados')){       
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function createUser(){
    let usuario1 = { 
        nome: "Roberto", 
        displayName: "RobertoLogin",
        senha: "10329904",
        turma: "9º Fund. 2",
        saldo: 240
    }
    let usuario2 = { 
        nome: "Alberto", 
        displayName: "AlbertoA",
        senha: "482730!",
        turma: "3º EM",
        saldo: 10
    }
    let usuario3 = { 
        nome: "Marcelo", 
        displayName: "Marelogin",
        senha: "marc20193",
        turma: "6º Fund. 1",
        saldo: 50
    }
    usuarios.push(usuario1, usuario2, usuario3)
    localStorage.setItem('cadastrados', JSON.stringify(usuarios))
    alert('Usuários Gerados, Cheque o local storage para fazer login!')
}

function procura_usuario(guarda_user, guarda_senha) {
    
    let index = usuarios.findIndex((element) => {
        return element.displayName == guarda_user && element.senha == guarda_senha
    })
    logado = index
    return index
}

function login() {
    let guarda_user = document.getElementById('user').value
    let guarda_senha = document.getElementById('senha').value 

    if(procura_usuario(guarda_user, guarda_senha) != -1){
        alert("Usuário validado! Bem-vindo!")
        localStorage.setItem('atualmenteLogado', JSON.stringify(logado))
        location.assign('home.html')
    }else{
        alert("Usuário não validado!")
    }
}

function purge() {
    localStorage.clear();
}