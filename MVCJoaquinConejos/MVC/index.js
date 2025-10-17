import MainController from "./controllers/MainController.js";

var myController;

/* EN L'INDEX CONTROLAREM L'ENRUTAMENT DE LES DIFERENTS ACCIONS
CREANT UN CONTROLADOR PRINCIPAL I PASSANT-LI L'ACCIÓ PER A QUE LA GESTIONE
EN PRINCIPI NO HAURIEM DE MODIFICAR RES AQUÍ
*/

$(document).ready(function() {
    
    myController = new MainController;
    myController.init();
    myController.doAction("home"); // Acció per defecte
    
    /* Controlarem l'acció segons el nom del botó
     el botó haurà de ser de la classe mvc-clickable */
    $(document).on("click",".mvc-clickable", function(event){
        // Cancelem l'acció per defecte del link
        event.preventDefault();
        route(this.name,this.dataset.mvcid);
    })
})


function route(action,id)
{
    // Passem la responsabilitat al controlador

        myController.doAction(action,id);
}


