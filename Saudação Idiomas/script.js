function mostrarSaudacao() {
    const idioma = document.getElementById('idiomaSelect').value;
    let saudacao;

    switch (idioma) {
        case 'ingles':
            saudacao = 'Hello!';
            break;
        case 'espanhol':
            saudacao = '¡Hola!';
            break;
        case 'frances':
            saudacao = 'Bonjour!';
            break;
        case 'alemao':
            saudacao = 'Hallo!';
            break;
        case 'portugues':
            saudacao = 'Olá!';
            break;
        default:
            saudacao = 'Idioma não suportado.';
    }

    document.getElementById('saudacao').textContent = saudacao;
}