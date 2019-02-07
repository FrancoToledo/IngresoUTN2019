/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var n1;
    var n2;
    var n3;
    var suma;
 
     n1 = document.getElementById("precioUno").value;
     n2 = document.getElementById("precioDos").value;
     n3 = document.getElementById("precioTres").value;

     suma = parseInt(n1)+parseInt(n2)+parseInt(n3);

     alert ("El Resultado De La Suma Es: " +suma);
}
function Promedio () 
{
    var num1;
    var num2;
    var num3;
    var prom;

     num1 = document.getElementById("precioUno").value;
     num2 = document.getElementById("precioDos").value;
     num3 = document.getElementById("precioTres").value;

    prom =  (parseFloat(num1)+parseFloat(num2)+parseFloat(num3))/3;

    alert ("Su Promedio Total Es: "+prom)

}
function PrecioFinal () 
{
    var nu1;
    var nu2;
    var nu3;
    var pf;


     nu1 = document.getElementById("precioUno").value;
     nu2 = document.getElementById("precioDos").value;
     nu3 = document.getElementById("precioTres").value;

     pf = (parseInt(nu1)+parseInt(nu2)+parseInt(nu3))*1.21;

     alert ("Precio Final Mas Iva Del 21% De: "+pf)




}