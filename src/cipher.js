window.cipher = {
  encode: (textEncode, number_offset) => {
    /* Acá va tu código */
    let cipEncode = ""; // Aquí se almacenan las letras reemplazadas, va a ser el nuevo mensaje.
    for (let i = 0; i < textEncode.length; i++) { // La función va recorriendo cada letra del string hasta llegar a la última.
      let txt = textEncode.charCodeAt(i); // Aquí se traducen de letras a unicodes. 
        if (65 <= txt && txt <= 90) { // Poniendo rangos de los unicode para poder definir si son mayúsculas, minúsculas o todo lo demás. En éste caso son las mayúsculas.
          cipEncode += String.fromCharCode ((txt - 65 + parseInt(number_offset))% 26 + 65);// Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en mayúscula.  
        } else if (97 <= txt && txt <= 122) { // En éste caso son las minúsculas.
          cipEncode += String.fromCharCode ((txt - 97 + parseInt(number_offset))% 26 + 97);// Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en minúscula. 
        } else {cipEncode += txt.charAt(i)}; // Aquí se aplica el caso en que no sean letras. Se copia directamente el carácter.
    } return  cipEncode; // Retorna el nuevo mensaje codificado.
  },

   decode: (textDecode, number_offset) => {
   
    let cipDecode = ""; 
    for (let i = 0; i < textDecode.length; i++){ 
         let txt = textDecode.charCodeAt(i); 
        if (65 <= txt && txt <= 90) { 
          let cipDecode = ((txt + 65 - parseInt(number_offset))% 26 + 65);
          cipDecode += String.fromCharCode ((txt + 65 - parseInt(number_offset))% 26 + 65);
        } else {cipDecode += textDecode.charAt(i)}; 
    } return cipDecode; 
  }   
 }    