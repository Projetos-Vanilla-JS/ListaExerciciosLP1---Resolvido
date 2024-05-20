const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');

function aplicarTema() {
    const tema = document.getElementById('tema').value;

    if (tema === "light") {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    } else if (tema === "dark") {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#ffffff";
    }
}
