/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
    var nombre;
    var nombre2;
    var Id;
    nombre = document.getElementById ("elNombre").value;
    nombre2 = document.getElementById ("elApellido").value;
    Id = document.getElementById ("idNumero").value;

    alert (nombre);
    alert (nombre2);
    alert (Id);
}


