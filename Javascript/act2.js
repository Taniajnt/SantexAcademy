//Ejercicio 2 

const arrayElementosIguales = [ ];
const array1 = [5, 7, 9, 'si', 'no'];
const array2 = [8, 5, 'no', 6, 9];

function elementosIguales (array1, array2, arrayElementosIguales){
    for (i = 0; i <=array1.length; i++) {
        if (array2.includes(array1[i])){
            arrayElementosIguales.push(array1[i])
        }
    }
    return arrayElementosIguales;}

console.log("El primer array contiene estos elementos:" + array1)
console.log("El segundo array contiene estos elementos:" + array2)
console.log("Estos elementos coinciden en ambos array:" + arrayElementosIguales)

