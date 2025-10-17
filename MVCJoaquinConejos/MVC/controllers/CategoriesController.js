import CategoriesView from "../views/CategoriesView.js";
import CategoriesModel from "../model/CategoriesModel.js";
import CategoriaView from "../views/CategoriaView.js";

export default class CategoriesController {
    constructor() {
        this.model = new CategoriesModel;		// crea el modelo
        this.view = new CategoriesView;		// crea la vista
    }
  
    init() {
        this.view.init();			// inicializa la vista, si es necesario
    }

    doAction(action, id)
    {
        switch(action) {
            case "getAll":
                this.view = new CategoriesView();
                let myView6 = this.view;
                this.model.getAllCategoria(function(categorias){
                  myView6.render(JSON.parse(categorias));
                });
                
              break;
            case "getCategoriaByName":
                this.view = new CategoriesView();
                let myView4 = this.view;
                let nombre = this.view.getTextSearch();
                alert("buscar " + nombre)
                this.model.getCategoriaByName(nombre, function(categorias){
                  console.log(categorias)
                  myView4.render(JSON.parse(categorias));
                });
              
              break;
            case "crearCategoria":
              this.view = new CategoriaView("create");
              this.view.renderCreate();
              break;
            case "insertCategoria":
                let categoria =this.view.getCategoria();
                console.log(categoria);
                this.model.insertCategoria(categoria);
                this.doAction("getAll");
              break;
            case"editarCategoria":
                alert(id);
                this.view = new CategoriaView("edit");
                let myView5 = this.view;
                this.model.getCategoriaByCat(id, function(categoria){
                  console.log(categoria);
                myView5.renderEditCategoria(JSON.parse(categoria));
                } );
              break;
            case "updateCategoria":
                let categorie = this.view.getCategoria();
                this.model.updateCategoria(categorie,()=>{this.doAction("getAll");});
              break;
            case "eliminarCategoria":
              this.model.deleteCategoria(id,()=>{this.doAction("getAll");});
              break;

            default:
              // code block
          }
    }
}
