function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
        alert( "Todos os campos são obrigatórios.")
    }

    else if (senha !== confirmarSenha) {
        alert( "As senhas não coincidem.")
    }

    else if (senha.length < 8) {
        alert( "A senha deve ter no mínimo 6 caracteres.")
    }
    else{
    alert( "Formulário enviado com sucesso!")}
}
