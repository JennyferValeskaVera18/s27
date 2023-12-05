/*
POTENCIA DE 2:
Funcion q te devuelva 2 elevado al número que se le pasa como argumento 

portenciaDos(3) -> 8
*/
/*
let potenciaDos = exp => 2**exp;
console.log(potenciaDos(3));

//para cualquier numero
let potenciar = ( base, exp) => base**exp;
console.log(potenciar(2,4));

*/



/* INVERTIR UN ARREGLO:
Crear una función que reciba un arreglo y lo devuleva invertido
invertirArreglo([0,1,2,4])  -> [4,3,2,1,0]
*/
/*
let arreglo = [0, 1, 2, 3];
let arregloInvertido= [];
arregloInvertido.push (3);
arregloInvertido.push (2);
arregloInvertido.push (1);
arregloInvertido.push (0);

console.log(arreglo);
console.log(arregloInvertido);
*/
/*
function invertirArreglo(arr) {
    let auxArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        auxArr.push(arr[i]);
    }

    return auxArr;
}

console.log(invertirArreglo([111, 222, 333]));
*/

/*
CONTAR VOCALES :
crear una función que reciba una cadena y ,uestre la cantidad de vocales que tiene

contarVocales("hola") -> 2
*/
/*
function contarVocales(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i].toLowerCase()) {
            case "a" : case "e" : case"i" : case "o" : case"u":
                contador++;
                break;
        }
    }
    return contador;
}

console.log(contarVocales("Hola"));
*/
/*
function contarVocales(str) {
    let contador = 0;
    for (let c of str) {
        switch (c.toLowerCase()) {
            case "a" : case "e" : case"i" : case "o" : case"u":
                contador++;
        }
    }
    return contador;
}

console.log(contarVocales("Hola"));
*/

/*
MAYOR DE 3 NÚMEROS
Crear una función que reciba tres números 
y devuleva el mayor 
*/

function numMax(nums) {
    let mayor = -9999999999;

    for (const num of nums) {
        if( num > mayor){
            mayor = num;
        }
        return mayor;

    }
}
console.log(numMax([34, 90, 67, 4, -24]));

