window.cipher = {
  encode: (textEncode, number_offset) => {
    /* Acá va tu código */
    let cipEncode = ""; 
    for (let i = 0; i < textEncode.length; i++) { 
      let txt = textEncode.charCodeAt(i); 
        if (65 <= txt && txt <= 90) { 
          cipEncode += String.fromCharCode ((txt - 65 + parseInt(number_offset))% 26 + 65);  
        } else if (97 <= txt && txt <= 122) { 
          cipEncode += String.fromCharCode ((txt - 97 + parseInt(number_offset))% 26 + 97);// Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en minúscula. 
        } else {cipEncode += txt.charAt(i)}; 
    } return  cipEncode; 
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