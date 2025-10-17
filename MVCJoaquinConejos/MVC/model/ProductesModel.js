export default class ProductesModel {
    constructor() {
    }

    ApiUrl = "http://localhost/MVC/db/productes.php";

    /* NOMÉS PER A L'EXEMPLE. 
       AIXÒ SIMULARÀ LES DADES QUE TENIM
       EN REALITAT TREBALLARIEM SOBRE UNA BBDD, API REST, SOAP...
    */
    productes = [];

    init()
    {
        // AQUÍ INICIARIEM LES DADES NECESSÀRIES PER ACCEDIR A LA BBDD

    }

    // retorna tots els productes
    getAll(Callback)
    {
        // Fa la crida AJAX a la API del servidor per obtindre les dades
        // Quan reb les dades s'executa la funció Callback
        /*
        $.get("http://localhost/MVC/db/productes.php", function(data, status){

            // Mostrem per consola la resposta
            console.log(data);
            console.log(status);

            // Passem el JSON a objecte
            let productos = JSON.parse(data);
            // Cridem a la funció que mostra les dades
            showData(productos);
            
        });
        */

        $.ajax({
            type: 'GET',
            contentType: 'application/json',  
            url: this.ApiUrl, // Podria passar el parametre id per url també
            success: function(data) { //Si s'exetuta amb exit s'executa aquesta funció
                Callback(data);
            },
            error: function(error) {//Si hi ha error s'executa aquesta funció
                console.log(error)
                errorObject = JSON.parse(error.responseText)
                console.log(errorObject.error);
            }
        });
    }

    // retorna el producte amb un ID
    getByID(id, Callback)
    {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',  
            url: this.ApiUrl + "?id=" + id, // Podria passar el parametre id per url també
            success: function(data) { //Si s'exetuta amb exit s'executa aquesta funció
                Callback(data);
            },
            error: function(error) {//Si hi ha error s'executa aquesta funció
                console.log(error)
                errorObject = JSON.parse(error.responseText)
                console.log(errorObject.error);
            }
        });
    }

    // Elimina el producte amb l'ID
    delete(id, Callback)
    {
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',  
            url: this.ApiUrl + "?id=" + id, // Podria passar el parametre id per url també
            success: function(data) { //Si s'exetuta amb exit s'executa aquesta funció
                console.log("Resultat: ", data);
                Callback(data); // Recarrego les dades, per això m'havia guardat on estic
            },
            error: function(error) {//Si hi ha error s'executa aquesta funció
                console.log(error)
                errorObject = JSON.parse(error.responseText)
                console.log(errorObject.error);
            }
            });
    }

    // Retorna el producte què conte NAME
    getByName(nombre, Callback)
    {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',  
            url: this.ApiUrl + "?name=" + nombre, // Podria passar el parametre id per url també
            success: function(data) { //Si s'executa amb exit s'executa aquesta funció
                console.log(data);
                Callback(data);
            },
            error: function(error) { //Si hi ha error s'executa aquesta funció
                console.log(error)
                errorObject = JSON.parse(error.responseText)
                console.log(errorObject.error);
            }
        });

    }

    // Inserta un producte
    insertProducte(producte)
    {  
        console.log("insertar producto");
        console.log(producte);
        
        $.ajax({
            type: 'POST',
            contentType: 'application/json',  
            url: this.ApiUrl, // Podria passar el parametre id per url també
            data: JSON.stringify(producte),
            success: function(data) { //Si s'exetuta amb exit s'executa aquesta funció
                alert("Data: " + data);
            },
            error: function(error) {//Si hi ha error s'executa aquesta funció
                console.log(error)
                let errorObject = JSON.parse(error.responseText)
                console.log(errorObject.error);
            }
        });

        console.log("producto insertado");
    }

    updateProducte(producte, Callback){
        
        console.log(producte);
        console.log(JSON.stringify(producte));
        $.ajax({
            type: 'PUT',
            contentType: 'application/json',  
            url: this.ApiUrl, // Podria passar el parametre id per url també
            data: JSON.stringify(producte),
            success: function(data) { //Si s'exetuta amb exit s'executa aquesta funció
                console.log("Que es data: " );
                console.log(data);
                Callback()
            },
            error: function(error) {//Si hi ha error s'executa aquesta funció
                console.log(error)
                let errorObject = JSON.parse(error.responseText)
                console.log(errorObject.error);
            }
        });
    }

}