//Creo la variable para el set interval y le asigno la funcion de movimiento
let myInterval;

//BOTONES//
//Creo las variables para los botones cogiendo su id

//Direccion//
let botonAba = document.getElementById('aba');
let botonArr = document.getElementById('arr');
let botonDer = document.getElementById('der');
let botonIzq = document.getElementById('izq');

//Estado//
let botonInicio = document.getElementById('iniciar');
let botonPausa = document.getElementById('pausar');
let botonReiniciar = document.getElementById('reiniciar');

//EVENT LISTENER//
//Creo los event listener necesarios para mover la serpiente con los botones
botonAba.addEventListener('click', abajo);
botonArr.addEventListener('click' , arriba);
botonDer.addEventListener('click' , derecha);
botonIzq.addEventListener('click' , izquierda);

//Creo los event listener necesarios para iniciar, pausar y detener el juego con botones
botonInicio.addEventListener('click', iniciar);
botonPausa.addEventListener('click', pausar);
botonReiniciar.addEventListener('click', reiniciar);

//TABLERO//
//Creo dos variables globales que me diran las filas y columnas que tendre
const filas = 20;
const columnas = 25;

//Creo el array que sera el tablero
let tablero = [];

//SERPIENTE//
//Creo el array que sera la serpiente
let serpiente;


//Para mover la serpiente necesito su ultima posicion del array
let cabeza;
//Aqui guardare la nueva posicion de la serpiente
let nuevaPosicion;

//ALIMENTO//
//Variable para el alimento
let alimentoX = 0;
let alimentoY = 0;

//DIRECCION//
//Creo una variable de direccion que se cambiara cuando presione una de las flechas
let direction;

//PUNTUACION//
let puntuacion = 0;

//En el momento que carga la pagina me ejecuta todo lo que haya dentro de la funcion prova.
window.onload = function () {
    // EVENT LISTENER
    //Evento para mover la serpiente con las flechas del teclado
    document.addEventListener('keydown', direccion);
    inicializar();
}

//Funcion para probar las funciones.
function inicializar() {
    direction = "ArrowRight";
    serpiente = [[3,2],[3,3],[3,4]];

    cabeza = serpiente[serpiente.length - 1];

    tablero = crearMatriz(filas,columnas);
    generarAlimento();
    colocarAlimento();
    colocarSerpiente();
    mostrarMatriz();
}

//Funcion para crear la matriz que sera el tablero.
function crearMatriz(filas,columnas) {
    const tablero = [];
    
    for (let i = 0; i < filas; i++) {
        tablero[i] = new Array(columnas);
        
        for (let x = 0; x < columnas; x++) {
            tablero[i][x] = "";
        }
    }

    
    return tablero;
}

//Funcion para mostrar la Matriz.
function mostrarMatriz() {
    let tabla = document.getElementById("tabla");
    html = "";
    
    //Recorro el array para crear las filas.
    tablero.forEach(fila => {
        html += "<tr>"; 

        //Recorro las filas para agregar las columnas.
        fila.forEach(columna => {
            if(columna == 1){
                html += "<td class='tdSerpiente'>" + "" + "</td>"; 
            } else if (columna == 2){
                html += "<td class='tdAlimento'>" + "" + "</td>";
            } else{
                html += "<td>" + columna + "</td>";
            }
            
        });
        
        //Cierro la fila.
        html += "</tr>"; 
    });
    
    //Agrego al html lo anterior.
    tabla.innerHTML = html;
}

//Recorro el array SERPIENTE y cada elemento sera una fila y columna para colocar dentro del tablero
function colocarSerpiente() {
    
    serpiente.forEach(element => {
        let fila = element[0];
        let columna = element[1];

        tablero[fila][columna] = 1;
    });
}

//Genero un numero aleatorio tanto para las filas como para las columnas, esos dos numeros seran las coordenadas para situar el alimento en el tablero
function generarAlimento() {
    let filaRand = Math.floor(Math.random() * filas);
    let columnaRand = Math.floor(Math.random() * columnas);

    alimentoX = [filaRand];
    alimentoY = [columnaRand];
}

//Funcion para cambiar el alimento de posicion
function cambiarAlimento() {
    if (serpiente[[0][0]] == alimentoX && serpiente[[0][1]] == alimentoY) {
        generarAlimento();
        colocarAlimento();
    }
}

function colocarAlimento() {
    tablero[alimentoX][alimentoY] = 2
}

//Funcion para mover la serpiente hacia la derecha
function movimiento() {
    //console.log(e);

    if (direction == "ArrowUp") {

        arriba();

    } else if (direction == "ArrowDown"){

        abajo();

    } else if (direction == "ArrowRight"){

        derecha();

    } else if (direction == "ArrowLeft"){

        izquierda();

    } else {
        alert("GAME OVER");
        clearInterval(myInterval);
    }
    
}

//Funciones de movimiento para las 4 direcciones
//--ARRIBA--//
function arriba (){
    console.log("arriba");
    nuevaPosicion = [cabeza[0] - 1, cabeza[1]];

    if (nuevaPosicion[0] >= 0) {

        cabeza = nuevaPosicion;
        
        serpiente.push(nuevaPosicion);

        colocarSerAliTable();
        console.log(serpiente);

    } else{
        alert("GAME OVER");
        clearInterval(myInterval);
    }
}

//--ABAJO--//
function abajo() {
    console.log("abajo");
    nuevaPosicion = [cabeza[0] + 1, cabeza[1]];

        if (nuevaPosicion[0] < filas) {

            cabeza = nuevaPosicion;
        
            serpiente.push(nuevaPosicion);

            colocarSerAliTable();

        } else{
            alert("GAME OVER");
            clearInterval(myInterval);
        }
}

//--DERECHA--//
function derecha() {
    console.log("derecha")
    nuevaPosicion = [cabeza[0], cabeza[1] + 1];

        if (nuevaPosicion[1] < columnas) {

            cabeza = nuevaPosicion;
        
            serpiente.push(nuevaPosicion);

            colocarSerAliTable();

        } else{
            alert("GAME OVER");
            clearInterval(myInterval);
        }
}

//--IZQUIERDA--//
function izquierda() {
    console.log("izquierda");
    nuevaPosicion = [cabeza[0], cabeza[1] - 1];

        if (nuevaPosicion[1] >= 0) {

            cabeza = nuevaPosicion;
        
            serpiente.push(nuevaPosicion);

            colocarSerAliTable();

        } else{
            alert("GAME OVER");
            clearInterval(myInterval);
        }
}

//Funcion para colocar Tablero, Serpiente y Alimento
function colocarSerAliTable() {
    

    tablero = crearMatriz(filas, columnas);

    if (cabeza[0] == alimentoX && cabeza[1] == alimentoY) {
        
        generarAlimento();
        colocarAlimento();
        puntuacion++;
        subirNivel();
        console.log("Alimento");
        console.log("Crece");
        //crecerSerpiente();
    
    } else{
        //Borra la ultima posició de la serp
        serpiente.shift();
        colocarAlimento();
    }

    colocarSerpiente();

    mostrarMatriz();
    mostrarPuntuacion();
}

//Funcion para decirle en que direccion se tiene que mover la serpiente
function direccion(e) {
    
    if (e.code == "ArrowUp" && direction != "ArrowDown") {
        direction = "ArrowUp";
    }
    if (e.code == "ArrowDown" && direction != "ArrowUp") {
        direction = "ArrowDown";
    }
    if (e.code == "ArrowRight" && direction != "ArrowLeft") {
        direction = "ArrowRight";
    }
    if (e.code == "ArrowLeft" && direction != "ArrowRight") {
        direction = "ArrowLeft";
    }
}

//Funcion para mostrar la puntuacion
function mostrarPuntuacion() {
    let score = document.getElementById("score");
    html = "<p> Puntuacion = " + puntuacion + "</p>";

    score.innerHTML = html;
}

//Funcion para subir de nivel lo que hara que se mueva mas rapido la serpiente
function subirNivel() {
    if (puntuacion % 5 === 0) {  
        
        myInterval = setInterval(movimiento, 1000 - (puntuacion / 5) * 250); // Redueix l'interval segons el nivell
        console.log("Sube de nivel");
    } else {
        myInterval;
    }
}

//Estado del juego//
//Funciones para iniciar, pausar y detener el juego
function iniciar() {
    
        myInterval = setInterval(movimiento, 1000);
    
}

function pausar(){
    clearInterval(myInterval);
}

function reiniciar() {
    puntuacion = 0;
    mostrarPuntuacion();    
    inicializar();
    clearInterval(myInterval);
}

//COOKIES//
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }

    }

    return "";
}
