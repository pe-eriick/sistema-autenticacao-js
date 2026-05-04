const form = document.getElementById("formCadastro");
console.log("JS carregado!");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirmar = document.getElementById("confirmarSenha");

    let valido = true;

    limparErros();

    // Confirmar senha
    if (senha.value !== confirmar.value) {
        erro (confirmar, "! As senhas não coincidem !");
        valido = false;
    }

    if (valido) {
        salvarUsuario(usuario.value, email.value, senha.value);
        alert("Cadastro realizado com sucesso!");
        form.reset();
    }
});

function erro(input, mensagem) {
    let small = input.parentElement.querySelector(".erro");
    small.innerText = mensagem;
}

function limparErros() {
    document.querySelectorAll(".erro").forEach(e => e.innerText = "");
}

// Mostrar/ocultar senha
function verOcultarSenha() {
    let senha = document.getElementById('senha');
    let icon = document.getElementById("icon");
   if( senha.type === "password") {
    senha.type = "text";
    icon.src = "olho.png";
   }else{
    senha.type = "password";
    icon.src = "ocultar.png";
   }  
}

function verOcultarSenhaDois() {
    let senha = document.getElementById('confirmarSenha');
    let icon = document.getElementById("icone");
   if( senha.type === "password") {
    senha.type = "text";
    icon.src = "olho.png";
   }else{
    senha.type = "password";
    icon.src = "ocultar.png";
}
}

// Simular banco de dados
function salvarUsuario(usuario, email, senha) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({ usuario, email, senha });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
