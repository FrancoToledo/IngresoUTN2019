/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var Ancho;
var Res;
var alambre;

largo = parseFloat( document.getElementById("Largo").value);
Ancho = parseFloat( document.getElementById("Ancho").value);

Res = largo + Ancho; 

alambre = Res * 3; 

alert ("El alambre necesario es : " +alambre);

}
function Circulo () 
{
var n1;
var Rad;
var alambre;

n1 = parseFloat( document.getElementById("Radio").value);

Rad =  n1 * 2 * 3.14 ; 

alambre = Rad * 3; 

alert ("El Alambre necesario es: " +alambre);
}
function Materiales () 
{
var largo;
var Ancho;
var per;
var cal;
var cemento;

largo = parseFloat( document.getElementById("Largo").value);
Ancho = parseFloat( document.getElementById("Ancho").value);

per = largo + Ancho; 

cal =  per * 3;
cemento = per * 2;


alert ("se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento");

}