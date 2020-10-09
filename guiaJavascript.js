/* Resolución  de la guía de ejercicios de Javascript */

/****** 1 *******/
//Imprimir por consola un mensaje guardado en una variable usando la función console.log()
    let mensaje = "Esta es la resolución del ejercicio 1";

    console.log("Ejercicio 1: ", mensaje);
/****************/

/****** 2 *******/
//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por 
//pantalla los doce nombres utilizando la función console.log()
  
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                 "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    for (var i = 0; i < meses.length; i++) {
        console.log("Ejercicio 2, mes: " + meses[i]);
    }
/****************/

/****** 3 *******/
//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado 
//una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
    function esParImpar(number){

        let resto = number % 2;
        let resultados = {"par": " es par", "impar": " es impar"}

        return resto > 0 ? number + resultados.impar :  number + resultados.par;
    }

    console.log("Ejercicio 3: ",esParImpar(5));
/****************/

/****** 4 *******/
// Define una función que dado un array de números nos dice si alguno es par.

    function algunoEsPar(number){

        let resto = number % 2;
        return  resto === 0;
    }

    let arrayNumbers = [1, 1 ,3, 5, 8];

    console.log("Ejercicio 4: ", arrayNumbers.some(algunoEsPar));

/****************/

/****** 5 *******/
//Define la función aprobó, que dada la lista de las notas de un alumno devuelve si 
//el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4

    function aprobo(arrayNotas){

        return arrayNotas.every(nota => nota >= 4);
    }

    let notas = [8,6,2,4];
    console.log("Ejercicio 5: ",aprobo(notas));
/****************/


/****** 6 *******/
//Define la función quienesAprobaron, que dada la información de un curso devuelve la información 
//de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.

    function quienesAprobaron(arrayAlumnos){

        let aprobados = arrayAlumnos.filter(aprobo);
        return aprobados
    }

    let alumno1 = [8,6,2,4];
    let alumno2 = [7,9,4,5];
    let alumno3 = [6,2,4,2];
    let alumno4 = [9,6,7,10];
    let arrayAlumnos = [alumno1, alumno2, alumno3, alumno4];

    console.log("Ejercicio 6: ",quienesAprobaron(arrayAlumnos));
/****************/

/****** 7 *******/
//Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo

    /*function isNegative(number){

        return number < 0;
    }*/

    function hayAlgunNegativo(arrayNumbers){

        let resultado = arrayNumbers.some(number => number < 0);
        return resultado;
    }

    let numbers = [2, -94,9];
   console.log("Ejercicio 7: ",`hayAlgunNegativo in:[${numbers}]: ` + hayAlgunNegativo(numbers));
/****************/


/****** 8 *******/
//Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen
    // even es una función que retorna true si un número es par (deben crearla)}

    function cuantosCumplen(even, numeros){
        let cont = 0;
        numeros.forEach(number => {
            if(even(number)){
                cont++;
            }
        });
        return cont;
    }

    console.log("Ejercicio 8: " + cuantosCumplen(algunoEsPar,[7,2,25,1,42]));

/****************/

/****** 9 *******/
// Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen

    function rechazar(even, numeros){
        return numeros.filter(number => !even(number));
    }

    console.log("Ejercicio 9: ", rechazar(algunoEsPar,[7,9,87,42])); // No terminado
/****************/

/****** 10 *******/
//  Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento

    function contiene(number, arrayNumbers){

        let contieneNumber = arrayNumbers.some(arrayNumber => arrayNumber === number);
        return contieneNumber;
    }

    let array = [7, 9, 9];

    console.log("Ejercicio 10: ", contiene(9 , array));
/****************/

/****** 11 *******/
//Crea una clase Persona que tenga los atributos nombre y edad. 
//Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad

    class Persona  {

        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }

        presentarse(){
            console.log(`Hola! Me llamo ${this.nombre} y tengo ${this.edad} años.`);
        }
    }

    let Ale = new Persona("Ale", 20);
    Ale.presentarse();
/****************/

/****** 12 *******/
//Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
//El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
//El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.

    class Estudiante extends Persona {
        constructor(nombre,edad){
            super(nombre, edad)
            this.estudiante = undefined;
        }

        setProfesor(profesor){
            this.profesor = profesor;
        }

        estudiando(){
            console.log('Estudiando con ' + this.profesor);
        }
    }

    let Alessandro = new Estudiante();
    Alessandro.setProfesor("Calabressi");
    Alessandro.estudiando();

/****************/

/****** 13 *******/
//Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes 
//con un array de Estudiante. Además debe tener dos métodos enseñando() que imprima por consola 
//todos sus estudiantes a los cuales les está enseñando y el método addEstudiante(unEstudiante) 
//que agregue a ese estudiante a la lista. Además este método es responsable de manejar de agregar 
//al objeto profesor como profesor del estudiante (manejo de doble referencia)

    class Profesor extends Persona {
        constructor(nombre, edad){
            super(nombre, edad);
            this.estudiantes = [];
        }

        addEstudiante(unEstudiante){
            this.estudiantes.push(unEstudiante);
        }

        enseñando(){

            let estudiantes = "";

            this.estudiantes.forEach(estudiante => {
                estudiantes += estudiante.nombre + ", "; 
            });


            console.log("Enseñando a " + estudiantes);
        }
    }

    let JulioProfe = new Profesor();
    let pedro = new Estudiante();
    let juan = new Estudiante();
    let nany = new Estudiante();

    pedro.nombre = "Pedro";
    juan.nombre = "Juan";
    nany.nombre = "Nany";

    let estudiantes = [nany, juan, nany];
    estudiantes.forEach(estudiante => {
        JulioProfe.addEstudiante(estudiante);
    });

    JulioProfe.enseñando();
/****************/