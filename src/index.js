/* Acá va tu código */
window.onload = () => {
	const btnTextEncode = document.getElementById("btn_encode");
	btnTextEncode.addEventListener("click", () => {
		let textEncode = document.getElementById("box-msg-encode").value;
		let number_offset = document.getElementById("n_offset_e").value;
	document.getElementById("msg-encode-check").innerHTML = window.cipher.encode(textEncode, number_offset);
	});
	/*rescatando el valor del texto a decodificar*/
	const btnTextDecode = document.getElementById("btn_decode");
	btnTextDecode.addEventListener("click", () => {
		let textDecode = document.getElementById("box-msg-decode").value;
		let number_offset = document.getElementById("n_offset_d").value;
		window.cipher.decode(textDecode, number_offset);
		document.getElementById("msg-decode-check").innerHTML = window.cipher.decode(textDecode, number_offset);
	});
}
