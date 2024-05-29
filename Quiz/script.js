function verificarRespostas() {
    const resposta1 = document.getElementById('pergunta1').value;
    const resposta2 = document.getElementById('pergunta2').value;
    const resultado = document.getElementById('resultado');

    let acertos = 0;

    if (resposta1 === "Paris") {
        acertos++;
    }
    if (resposta2 === "Pacífico") {
        acertos++;
    }

    resultado.textContent = "Você acertou " + acertos + " de 2 perguntas."
}
