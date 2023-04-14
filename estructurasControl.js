/*if/else
Permite que se realice una instrucción u otra de acuerdo a la evaluación de una condición. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
En la condicion se utilizan operadores de comparación.
*/

var edad = 26;
if (edad >=18){
    console.log("eres mayor de edad puedes ingresar")
}else{
    console.log ("no eres mayor de edad no puedes ingresar" )
}

/*Condiciones anidadas
Permite que se realice una instrucción u otra de acuerdo a la evaluación de varias condiciones. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else if (condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
*/

var hora =99;

if (hora>= 0 && hora <=5) { //Primera condición
    console.log("Dejen dormir!")
} else if(hora>=6 && hora<=11){ //Segunda condición
    console.log("Buenos días!")
} else if(hora>=12 && hora<=18){ //Tercera condición
    console.log("Buenas tardes!")
} else if(hora>=19 && hora<=23) {
    console.log("Buenas noches!")//Instruccion si no se cumple ninguna condición
} else{
    console.log("hora no establecida  ")
}


/*Operador ternario
Se suelen usar para condicones simples con la siguiente estructura
    (condicion) ? InstruccionVerdadero : InstruccionFalso
Para entender mejor vea el siguiente ejemplo*/

let a=8,
    b=3

let esMayor= (a>b) ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`
console.log(esMayor)


/*Switch - Case
Estructura de control condicional que según una expresión evalua distintos posibles casos. Su sistaxis es:
    switch(expresion){
        case valor1:
            //instruccion
            break;
        case valor2:
            //instruccion 2
            break;
        default:
            //instruccion si ningun caso se cumple
            break;
    }

    El siguiente ejmplo devuelve un día dependiendo un número dado
    0 Domingo
    1 Lunes
    2 Martes
    3 Miercoles
    4 Jueves
    5 Viernes
    6 Sabado*/

console.log("-----------------switch/case----------------------")

let dia=3

switch (dia) {
    case 0:
        console.log("El día es domingo")
        break;
    case 1:
        console.log("El día es lunes")
        break;
    case 2:
        console.log("El día es martes")
        break;
    case 3:
        console.log("El día es miercoles")
        break;
    case 4:
        console.log("El día es jueves")
        break;
    case 5:
        console.log("El día es viernes")
        break;
    case 6:
        console.log("El día essabado")
        break;

    default:
        console.log("el día no existe")
        break;
}


/* resolucion del probelmas  entradas y salidas 
Según lo anterior haga un código que dados tres números, evalúe cual es el número mayor.
Imprimalos en consola ordenados.  */


let a=8,
    b=3
    c=6

let esMayor= (a>b) ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`
console.log(esMayor)




/*For
Permite ejecutar un código un número determinado de veces.
Como se ve a continuación*/

/*La variable i aumenta de uno en uno siempre que sea mejor que 10*/

console.log("-----------------Condicional for----------------------")

for (let i = 0; i < 10; i++) {
    console.log(`El for va en ${i}`)


var num2 =7;

if (numero %2==0){
console.log("numero par");
}else {
console.log("Numero impar");
}

/*While.
Permite ejecutar un código mientras se cumpla una condición.
Como se ve a continuación*/

console.log("-----------------Condicional while----------------------")

let cont=0

/*La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10*/

while(cont<10){
    console.log(`El while va en ${cont}`)
    cont++
}



contador = 1;
numero = 7;
while (contador <= 10) {
console.log(`${numero} x ${contador} = ${numero * contador}`);
contador++;
}
