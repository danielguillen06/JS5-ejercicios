//Ejercicios: Nivel 1
/*
1.Declara un array vacío.
*/

// let ArrayVacio= Array();
// console.log(ArrayVacio);

/*
2.Declara un array com mas de 5 elementos.
*/

// ArrayVacio =[1,2,3,4,5,6]
// console.log(ArrayVacio);
/*
3.Encuentra la longitud de tu array.
*/

// console.log(`la longitud del array es: ${ArrayVacio.length}`);

/*
4.Obtenga el primer elemento, el elemento del medio y el último elemento de un array
*/
// console.log("primer elemento:", ArrayVacio[0],
//             "elemento del medio:", ArrayVacio[2],
//             "último elemento:", ArrayVacio[5]);     
/*
5.Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. 
El tamaño del array debe ser mayor que 5.
*/ 

// let mixedDataTypes = ["españa",1, true, false,[0,1],"italia"];
// console.log("longitud del nuevo array: ",mixedDataTypes.length);

 /*
6.Declare un variable array de nombre itCompanies y asignarles valores iniciales
 Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
  */
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];

/*
7.Imprima el array usando console.log().
*/
// console.log(itCompanies);

/*
8.Imprima el número de empresas en el array.
*/
// console.log("numero de empresas: ",itCompanies.length);

/*
9.Imprime la primer empresa , la intermedia y la última empresa
*/

// console.log("primer empresa:", itCompanies[0]);
// console.log("la intermedia:" , itCompanies[3]);
// console.log("la última empresa:", itCompanies[6]);

/*
10.Imprime cada empresa.
*/
// let NewItCompanies = itCompanies.toString()
// console.log(NewItCompanies);

/*
11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
 */

// console.log(NewItCompanies.toUpperCase().split(","));

/*
12.Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
*/


// console.log(`${itCompanies.join(", ").replace(", Amazon"," y amazon")} son grandes empresas de TI`);

/*
13.Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
*/

// let empresa  = itCompanies.indexOf("Facebook")
// empresa === -1
//   ? console.log("la empresa no existe")
//   : console.log("la empresa si existe")

/*
14.Filtre las empresas que tienen más de una 'o' sin el método filter()
*/
// let filtro = itCompanies.toString();
// console.log("filtramos las empresas con mas de una o: ",filtro.match(/([A-Za-z]{1,6})?.o.?o([A-Za-z]{1,6})/g)); 

/*
15. Ordene el array usando el método sort()
*/
// console.log("ordenamos: ",itCompanies.sort());

/*
16. Invierte la array usando el método reverse()
*/

// console.log("Invertimos: ", itCompanies.reverse());

/*
17. Cortar las primeras 3 empresas del array
*/

// console.log("Cortamos las tres primeras empresas: ",itCompanies.slice(0, 3));

/*
18.Cortar las últimas 3 empresas del array
*/
// console.log("Cortamos las últimas 3 empresas:", itCompanies.slice(itCompanies.length - 3, itCompanies.length));

/*
19.Cortar la empresa o empresas intermedias de TI del array
*/

// console.log("Cortamos la empresa o empresas intermedias:",itCompanies.slice(Math.floor(itCompanies.length / 2), 4));

/*
20.Eliminar la primera empresa de TI del array
*/
// itCompanies.shift();
// console.log("eliminamos la primera empresa: ", itCompanies);

/*
21.Eliminar la empresa o empresas intermedias de TI del array
*/

// itCompanies.splice(Math.floor(itCompanies.length / 2), 1)
// console.log("eliminamos la empresa o empresas intermedias:",itCompanies);

/*
22.Elimine la última empresa de TI del array
*/

// itCompanies.pop();
// console.log("Eliminamos la última empresa:", itCompanies);

/*
23. Eliminar todas las empresas de TI
*/

// console.log("elimanos todas:", itCompanies.splice());

//////////////////////////////////////////////////////////////////
//Ejercicios: Nivel 2

/*
1.Cree un archivo de countries.js separado y almacene el array de países en este archivo, 
cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
*/

