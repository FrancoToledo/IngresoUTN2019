function mostrar()
{
var continentes;
var america;
var asia;
var africa;
var europa;
var dias;
var medio;
var debito;
var mer;
var otro;

dias = prompt("ingrese cantidad de dias: ");
continentes = prompt("ingrese un continente: ").toLocaleLowerCase();
medio = prompt("ingrese un Medio de pago: ");

switch (continentes){
    case ("america"):
    america = (dias * 100) * 50 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + america);
    if (continentes == "america" && medio == "debito"){
    debito = america * 10 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + debito);
    }
    break;
    case ("africa"):
    africa = (dias * 100) * 60 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + africa);
    if(continentes == "africa" && medio == "mercadopago" || continentes == "africa" && medio == "efectivo" ){
    mer = africa * 15 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + africa);
    }
    break;
    case ("europa"):
    europa = (dias * 100) * 20 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + europa);
    if (continentes == "europa" && medio == "debito"){
    debito = europa * 15 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + debito);
    }else if(continentes == "europa" && medio == "mercadopago"){
    mer = europa * 10 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + mer);
    }else if (continente == "europa" && medio == "otro"){
    otro = europa * 5 / 100;
    alert ("el total por los dias es: " + dias + " y el total a pagar es: " + otro);
    break;
      
    }



}
}