export default class CategoriesModel {
    constructor() {
    }

    ApiUrl = "http://localhost/MVC/db/categories.php";

    init()
    {}

        // retorna tots els productes
    getAllCategoria(Callback)
    {

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
    getCategoriaByCat(id, Callback)
    {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',  
            url: this.ApiUrl + "?catid=" + id, // Podria passar el parametre id per url també
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
    deleteCategoria(id, Callback)
    {
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',  
            url: this.ApiUrl + "?catid=" + id, // Podria passar el parametre id per url també
            success: function(data) { //Si s'exetuta amb exit s'executa aquesta funció
                console.log("Resultat: ", data);
                alert("Categoria Eliminada");
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
    getCategoriaByName(nombre, Callback)
    {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',  
            url: this.ApiUrl + "?nombre=" + nombre, // Podria passar el parametre id per url també
            success: function(data) { //Si s'executa amb exit s'executa aquesta funció
                console.log("GetByName" + data);
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
    insertCategoria(categoria)
    {  
        console.log("insertar categoria");
        console.log(categoria);
        
        $.ajax({
            type: 'POST',
            contentType: 'application/json',  
            url: this.ApiUrl, // Podria passar el parametre id per url també
            data: JSON.stringify(categoria),
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

    updateCategoria(categoria, Callback){
        
        console.log(categoria);
        console.log(JSON.stringify(categoria));
        $.ajax({
            type: 'PUT',
            contentType: 'application/json',  
            url: this.ApiUrl, // Podria passar el parametre id per url també
            data: JSON.stringify(categoria),
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
