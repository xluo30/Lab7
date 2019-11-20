  
window.addEventListener("load", init);

function init() {
	document.getElementById("entrybutton").addEventListener("click", alertMes);
	function alertMes() {
		var message = document.getElementById("entryinput").value;
		alert("Xiaojie Luo: " + message);
		document.getElementById("textoutput").innerHTML= message; 
	}
};
