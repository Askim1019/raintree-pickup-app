/*---- only allows for numeric characters to be entered in for PIN ----*/
function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;
	return true;
}



document.getElementById("drop-off-button").onclick = function() {
	window.location.href = "drop-off-confirm.html";
}

document.getElementById("pick-up-button").onclick = function() {
	window.location.href = "pick-up-confirm.html";
}



