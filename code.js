//funciones 

// declarativas 

function miFuncion(){
  return 3;   
}

//expresion 

var otraFuncion =function(){
    return a +b;
}

var nombre =(" hola mundo ")
console.log 

var nombre ="miguel";
var edad = 28;
console.log(nombre,edad);

//Definición variable local.
let musica="Rock"
console.log("Variable música antes del bloque:", musica)

//Definición variable global
var pelicula="Interestelar"
//Para concatenar el texto con una variable / constante se utiliza la coma, como se ve a continuación
console.log("Variable película antes del bloque:", pelicula)

//esto es un bloque
{
  var pelicula="Matilda"
  console.log("Variable película en el bloque:", pelicula)

  let musica="Salsa"
  console.log("Variable música en el bloque:", musica)
}

console.log("Variable película despues del bloque:", pelicula)
console.log("Variable música despues del bloque:", musica)


var nombre ="miguel";
var apellido= "beltran";
var edad = 29;
var cancionFavorita =""
var respuesta= true

console.log(`hola mi nombre es ${nombre} ${apellido} y tengo ${edad} no tengo cancion favorita${cancionFavorita} y la respuesta es ${respuesta}`)