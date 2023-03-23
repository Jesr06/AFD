function validarCadena() {
    // Obtener el valor del input de texto
    const inputString = document.getElementById("input-string").value;
  
    // Validar si la cadena es compuesta solo por "a" y es par
    if (inputString.match(/^a+$/g) && inputString.length % 2 === 0) {
      document.getElementById("resultado").innerText = "La cadena es valida :D";
    } else {
      document.getElementById("resultado").innerText = "La cadena No es valida D:";
    }
  }