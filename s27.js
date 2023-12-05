//CREAMOS NUESTRA PRIMERA FUNCIÒN
/*
function escribir() {
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate rem deserunt fugit adipisci deleniti facere? Vero ad voluptates eius reprehenderit. Tenetur cumque dolorem ullam ad, illum laboriosam maxime minima?");
}
//Llamado de función
escribir();
/*
//EJEMPLO 1 saludo con parámetros
/*
function saludar (nombre)  {
    console.log ("=============================")
    console.log(`Hola ${nombre}, buenas noches.`)
    console.log ("=============================")

}
//Llamamos a la función, al llamarlo cambio el nombre 
let nombre = prompt("Ingresa tu nombre: ");
saludar("nombre");
*/

//OPERACIONES, en n1 y n2 son los datos que utilizaremos(la funcion de esto es ,ostrar en consola)
/*
function sumar(n1, n2) {
    console.log(n1 + n2);

}
sumar(2, 3);
*/

//Aqui guardar el resultado
/*
function sumar(n1, n2) {
    return n1 + n2;

}
let resultado = sumar(56, 34);
console.log(resultado);
*/

//ARROW (flecha) FUNCTION, usamos el 1er ejemplo pero esto se disminuye ne 1 linea
/*
let saludar = nombre => console.log(`Hola ${nombre}, buenas noches.`);
saludar ("Juan");
*/


//ARROW FUNCTION SUMMAR
/*
let sumar = (n1, n2) => n1 + n2;

let resultado = sumar(7, 2);
console.log(resultado);
*/





//RESTA
//1era forma
function resta(n1, n2) {
    console.log(n1 - n2);

}
resta(4, 2); 
//2da forma
/*
let restar = (n1, n2) => n1 - n2;

let resultado = restar(7, 2);
console.log(restar);
*/
//MULTIPLICACIÓN
//1era forma
/*
function multiplicar(n1, n2) {
    console.log(n1 * n2);

}
multiplicar(4, 2);
*/
//2da forma
/*
let multiplicar = (n1, n2) => n1 * n2;

let resultado = multiplicar(7, 2);
console.log(resultado);
*/

//D ividir 
//1era forma 
/*
function dividir(n1, n2) {
    if(n2!= 0){
        return n1/n2
    }
    else {
        "ERROR: NO SE PUEDE DIVIDIR ENTRE 0"
    }

}
dividir(4, 2);
*/
//2da forma
/*
let dividir = (n1, n2) => n2 != 0 ? n1 / n2: "ERROR: NO SE PUEDE DIVIDIR ENTRE 0";

console.log(dividir(4, 0));
*/

