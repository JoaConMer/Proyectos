import replaceParams from "../utils/replaceParams.js";

export default class HomeView {
    constructor() {
      
    }
  
    init() {// inicializa la vista, si es necesario
        		
    }
    
    render(textHome)
    {   
        // Obtenim la pàgina home
        $.get("./views/home.html", function(data,status){
            if(status=="success")
            {
                // Substituirem els parametres
                // per les dades que hem rebut del model
                var html = replaceParams.replace(textHome,data);
                // Ho mostrem a la pàgina principal
                $("#mvc-main").html(html);
            }
            else
            {
                $("#mvc-main").html("Something went wrong... :(");
            }
        });
    
        /* SI NO TENIM DADES PODEM SIMPLEMENT CARREGAR LA PÀGINA 
        $("#mvc-main").load("./views/home.html")*/
    }

}