function validPin() {
	var userInput = document.getElementById('pin-input').value

	var pin = 1111;
	
	
	if (pin == userInput) {
		document.getElementById("drop-off-button").onclick = function() {
		window.location.href = "drop-off-confirm.html";
		}
	} else {
		document.getElementById("drop-off-button").onclick = function() {
		window.location.href = "index.html";
		}	
	}
}


/*---- only allows for numeric characters to be entered in for PIN ----*/
function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	else
		return true;
}






document.getElementById("pick-up-button").onclick = function() {
	window.location.href = "pick-up-confirm.html";
}



