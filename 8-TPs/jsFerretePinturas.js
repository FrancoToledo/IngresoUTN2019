/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
    var convercion;

    Fahrenheit = parseFloat( document.getElementById("Temperatura").value);

    convercion = (Fahrenheit -32)* 5/9;

    alert ("Hacen " + convercion + "º centígrados");
      

}

function CentigradosFahrenheit () 
{
	var centigrados;
    var convercion;

    centigrados = parseFloat( document.getElementById("Temperatura").value);

    convercion = centigrados * 9/5 + 32;

    alert ("Hacen " + convercion + "º Fahrenheit");
}
