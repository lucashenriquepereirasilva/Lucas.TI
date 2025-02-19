function obterData() {
    const data = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return data.toLocaleDateString('pt-BR', options); // Correção do erro de digitação
}

// Espera o DOM carregar antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('dataAtual').innerHTML = obterData();
});
