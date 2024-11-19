function calcularValor() {
    // Obtém o valor dos campos de entrada
    const valor15min = parseFloat(document.getElementById("valor15min").value);
    const tempoUso = parseInt(document.getElementById("tempoUso").value);
    
    // Calcula o número de blocos de 15 minutos necessários
    const blocos15min = Math.ceil(tempoUso / 15);
    
    // Calcula o valor a pagar
    const valorPagar = blocos15min * valor15min;
    
    // Exibe o valor a pagar no HTML
    document.getElementById("valorPagar").textContent = valorPagar.toFixed(2);
}
