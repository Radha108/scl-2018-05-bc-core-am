/* Acá va tu código */
window.onload = function() {
  // Botón para la función de cifrar.
  const btnC = document.getElementById("Fbtn"); // Llama al botón del HTML.
  btnC.addEventListener("click", function (){ // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
    let text = document.getElementById("boxOne").value; // Se guarda el valor de "source-text" en la variable "text".
    let number = document.getElementById("shiftNumber").value; // Se guara el valor de "shiftNumber" en la variable "shifts".
    window.cipher.encode(text, shifts); // Se mandan los valores obtenidos a la función encode.
  });
  
  //Botón para la función descifrar.
  const btnT = document.getElementById("Sbtn"); // Llama al botón del HTML.
  btnT.addEventListener("click", function (){ // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.
    let text = document.getElementById("boxOne").value; // Se guarda el valor de "source-text" en la variable "text".
    let number = document.getElementById("shiftNumber").value; // Se guara el valor de "shiftNumber" en la variable "shifts".
    window.cipher.decode(text, number); // Se mandan los valores obtenidos a la función encode.
  });
  }
}
