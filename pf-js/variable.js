/**
 * En JS hay 3 fromas de declarar variables.
 * Existe una forma que ya no se recomienda su uso
 * !var
 * Al proceso de crear una variable y darle un valor, se le llama asignación
 * 
 * a las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * ? let nombreVariable = valor;
 * 
 *  *El operador = se conoce como operador de asignación
 * Una vez creada una variable podemos usarla en otros lugares del código, utilizando su nombre, las variables al ser utilizadas no van entre comillas ""
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar) se declaran:
 * ! const nombreVariable = valor
 * 
 * Nota:
 * Palabras reservadas: Son palabras que utilizan el lenguaje de programación y si intentamos usarlas en otros lados pueden generar errores.
 */

let nombre = "Josue"; // Tipo string
console.log(nombre);

const birthYear = 1993 //Tipo number
console.log(birthYear);

/* Reasignando una variable (cambiando el valor que tiene)
    Cuando reasignamos una variable (una variable ya creada)
    ! Ya no es necesario poner let
*/

let name = "Alejandro";

nombre = "BrenFer";
console.log(nombre);
console.log(name);

/**Sección de prueba 
 * 
 * birthYear = 1995
*/

/**
 * Concatenar:
 * Nos permite pegar el valor de una variable a un texto
 */

console.log("Hola soy " + 
    nombre + 
    " y estoy en gen con " + 
    name + 
    " y nací en el año " + 
    birthYear);