function verificarDia() {
    const dia = parseInt(document.getElementById('dia').value);
    let resultado = document.getElementById('resultado');

    switch (dia) {
        case 1:
            resultado.innerText = "Hoje é Segunda-feira.";
            break;
        case 2:
            resultado.innerText = "Hoje é Terça-feira.";
            break;
        case 3:
            resultado.innerText = "Hoje é Quarta-feira.";
            break;
        case 4:
            resultado.innerText = "Hoje é Quinta-feira.";
            break;
        case 5:
            resultado.innerText = "Hoje é Sexta-feira.";
            break;
        case 6:
            resultado.innerText = "Hoje é Sábado.";
            break;
        case 7:
            resultado.innerText = "Hoje é Domingo.";
            break;
        default:
            resultado.innerText = "Dia inválido.";
    }
}
