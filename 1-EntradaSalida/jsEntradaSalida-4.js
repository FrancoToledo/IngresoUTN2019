/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var nombre;
    var nombre2;
    var Id;
	
	nombre = prompt ("ingrese Un Nombre");
	nombre2 = prompt ("ingrese Un Apellido");
	Id = prompt ("ingrese Un Id");
	
	document.getElementById ("elNombre").value = nombre;
    document.getElementById ("elApellido").value = nombre2;
    document.getElementById ("idNumero").value = Id;



}

