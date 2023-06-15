
function validarFormulario() {
    var checkboxes = document.getElementsByName("ACEPTO");
    var seleccionado = false;

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        seleccionado = true;
        break;
      }
    }

    if (!seleccionado) {
      alert("ACEPTA LAS POLITICAS DE PRIVACIDAD");
      return false;
    }
  }

  