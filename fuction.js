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
  const interesTotal = totalPagado - montoPrestamo;
  const interesSemanal = interesTotal / plazo;
  const interesTranscurrido = interesSemanal * semanasTranscurridas;

  resultado.innerHTML = `
    <p>Total pagado: $${totalPagado.toLocaleString('es-MX')}</p>
    <p>Interés total: $${interesTotal.toLocaleString('es-MX')}</p>
    <!-- <p>Interés semanal: $${interesSemanal.toFixed(2)}</p> -->
    <p><strong>Interés hasta la semana ${semanasTranscurridas}: $${interesTranscurrido.toFixed(2)}</strong></p>
  `;
  resultado.style.color = "#000"; // Color negro
}



