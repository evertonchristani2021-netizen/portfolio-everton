const form = document.getElementById("formContato");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos.");
        return;
    }

    const emailValido =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    form.reset();
});

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        temaBtn.innerText = "Modo Claro";
    }else{
        temaBtn.innerText = "Modo Escuro";
    }

});
