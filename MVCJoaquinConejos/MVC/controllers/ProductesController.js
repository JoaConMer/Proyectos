import ProductesView from "../views/ProductesView.js";
import ProductesModel from "../model/ProductesModel.js";
import ProducteView from "../views/ProducteView.js";

export default class ProductesController {
    constructor() {
        this.model = new ProductesModel;		// crea el modelo
        this.view = new ProductesView;		// crea la vista
    }
  
    init() {
        this.view.init();			// inicializa la vista, si es necesario
    }

    doAction(action,id)
    {
        switch(action) {
            case "getAll":
              this.view = new ProductesView();
              let myView = this.view;
              this.model.getAll(function(productos){
                myView.render(JSON.parse(productos));
              });
              
              break;
            case "getByName":
              this.view = new ProductesView();
              let myView3 = this.view;
              let nombre = this.view.getTextSearch();
              alert("buscar " + nombre)
              this.model.getByName(nombre, function(producte){
                console.log(producte)
                myView3.render(JSON.parse(producte));
              });
              
              break;
            case "crearProducte":
              this.view = new ProducteView("create");
              this.view.renderCreate();
              break;
            case "insertProducte":
              let producto =this.view.getProducte();
              console.log(producto);
              this.model.insertProducte(producto);
              this.doAction("getAll");
              break;
            case "editarProducte":
                this.view = new ProducteView("edit");
                let myView2 = this.view;
                this.model.getByID(id, function(producte){
                  myView2.renderEdit(JSON.parse(producte));
                } );
              break;
            case "updateProducte":
              let producte = this.view.getProducte();
              this.model.updateProducte(producte,()=>{this.doAction("getAll");});
              
               // Actualitzariem el producte a travès del model
              break;
              case "eliminarProducte":
                this.model.delete(id,()=>{this.doAction("getAll");});
                
              break;
             }
    }
}



