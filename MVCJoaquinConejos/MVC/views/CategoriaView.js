import Categoria from "../model/Categoria.js";

export default class CategoriaView {
    constructor(mode) {
      this._mode=mode;
    }
    
    init() {// inicializa la vista, si es necesario
       		
    }
    // Render per a crear un nou producte 
    renderCreate()
    {   
        $("#mvc-main").load("./views/categoria.html", function() {  
          
            $("#categoriesTitol").text("Nou producte");      
            $("#catid").prop( "disabled", true );
        });
    }
    // Render per a editar un producte existent
    renderEditCategoria(categoria)
    {   
        $("#mvc-main").load("./views/categoria.html", function(){
            console.log(categoria);
        // Després de carregar
        $("#catid").prop( "disabled", true );
        $("#categoriaTitol").text("Editar categoria");
        $("#saveCategoria").attr('name',"updateCategoria");

        $("#catid").val(categoria.catid);
        $("#nombre").val(categoria.nombre);
        });
    }     
    

    /** AQUÍ CREEM ELS GETS QUE NECESSITE EL CONTROLADOR */

    // Retornarà l'estat de la vista (un producte)
    getCategoria()
    {
        let categoria = new Categoria();
        categoria.catid=$("#catid").val();
        categoria.nombre=$("#nombre").val();
        return categoria;
    }
    
}
