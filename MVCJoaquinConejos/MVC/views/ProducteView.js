import Producte from "../model/Producte.js";

export default class ProducteView {
    constructor(mode) {
      this._mode=mode;
    }
    
    init() {// inicializa la vista, si es necesario
       		
    }
    // Render per a crear un nou producte 
    renderCreate()
    {   
        $("#mvc-main").load("./views/producte.html", function() {  
          
            $("#productesTitol").text("Nou producte");      
            $("#id").prop( "disabled", true );
        });
    }
    // Render per a editar un producte existent
    renderEdit(producte)
    {   
        $("#mvc-main").load("./views/producte.html", function(){

        // Després de carregar
        $("#id").prop( "disabled", true );
        $("#productesTitol").text("Editar producte");
        $("#saveProducte").attr('name',"updateProducte");

        $("#id").val(producte.id);
        $("#catid").val(producte.catid);
        $("#name").val(producte.name);
        $("#desc").val(producte.descripcio);
        $("#pvp").val(producte.pvp);
        $("#ref").val(producte.referencia);
        $("#img_url").val(producte.img_url);
        });
    }     
    

    /** AQUÍ CREEM ELS GETS QUE NECESSITE EL CONTROLADOR */

    // Retornarà l'estat de la vista (un producte)
    getProducte()
    {
        let producte = new Producte();
        producte.id=$("#id").val();
        producte.catid=$("#catid").val();
        producte.name=$("#name").val();
        producte.descripcio=$("#desc").val();
        producte.pvp=$("#pvp").val();
        producte.referencia=$("#ref").val();
        producte.img_url=$("#img_url").val();
        return producte;
    }
    
}
