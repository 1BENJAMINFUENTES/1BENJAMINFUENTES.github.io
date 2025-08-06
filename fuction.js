function calcularGanancia() {
  const plazo = parseFloat(document.getElementById('plazo').value);
  const pagoSemanal = parseFloat(document.getElementById('pagoSemanal').value);
  const montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
  const semanasTranscurridas = parseFloat(document.getElementById('semanasTranscurridas').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(plazo) || isNaN(pagoSemanal) || isNaN(montoPrestamo) || isNaN(semanasTranscurridas)) {
    resultado.textContent = "Por favor, llena todos los campos numéricos.";
    resultado.style.color = "#f00";
    return;
  }

  const totalPagado = plazo * pagoSemanal;
  const gananciaTotal = totalPagado - montoPrestamo;
  const gananciaSemanal = gananciaTotal / plazo;
  const gananciaTranscurrida = gananciaSemanal * semanasTranscurridas;

  resultado.innerHTML = `
    <p>Total pagado: $${totalPagado.toLocaleString('es-MX')}</p>
    <p>Ganancia total: $${gananciaTotal.toLocaleString('es-MX')}</p>
    <!-- <p>Ganancia semanal: $${gananciaSemanal.toFixed(2)}</p> -->
    <p><strong>Ganancia hasta la semana ${semanasTranscurridas}: $${gananciaTranscurrida.toFixed(2)}</strong></p>
  `;
  resultado.style.color = "#000"; // Color negro, no fosforescente
}


