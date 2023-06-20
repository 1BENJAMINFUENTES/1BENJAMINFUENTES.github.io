var range = document.getElementById("myRange");
var valueDisplay = document.getElementById("valueDisplay");
var duration = 4000; // Duración de la transición en milisegundos
var delay = 20000; // Tiempo en milisegundos antes de regenerar la animación

// Función para animar el valor del rango con transición repetida
function animateRangeValue() {
  var start = parseInt(range.value);
  var end = parseInt(range.max);

  var startTime = null;
  var isMaxReached = false;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var t = Math.min(progress / duration, 1);

    range.value = Math.round(start + (end - start) * t);
    valueDisplay.textContent = range.value;

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      if (!isMaxReached) {
        startTime = null;
        isMaxReached = true;
        setTimeout(regenerateAnimation, delay);
      }
    }
  }

  requestAnimationFrame(step);
}

// Función para regenerar la animación
function regenerateAnimation() {
  range.value = parseInt(range.min);
  isMaxReached = false;
  animateRangeValue();
}

// Iniciar la animación al cargar la página
window.addEventListener("load", function() {
  animateRangeValue();
  setInterval(regenerateAnimation, delay);
});

