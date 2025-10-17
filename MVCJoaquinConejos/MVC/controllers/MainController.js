import CategoriesController from "./CategoriesController.js";
import ProductesController from "./ProductesController.js";
import HomeController from "./HomeController.js";

export default class MainController
{

// Definim tots els controladors
myHomeController
myCategories
myProductes
init()
{
//Aquí creem tots els controladors   
this.myHomeController= new HomeController
this.myCategories = new CategoriesController;
this.myProductes = new ProductesController;
}
doAction(action, id)
{
    switch(action) {
        case "home":
          this.myHomeController.doAction("getHome");
          break;
        case "categories":
          this.myCategories.doAction("getAll");
          break;
      case "productes":        
          this.myProductes.doAction("getAll");
          break;
        case "buscarProductes":
            this.myProductes.doAction("getByName");
            break;
        case "crearProducte":
            this.myProductes.doAction("crearProducte");
            break;
        case "insertProducte":
              this.myProductes.doAction("insertProducte");
          break;
        case "editarProducte":
            this.myProductes.doAction("editarProducte",id);
            break;
        case "updateProducte":
            this.myProductes.doAction("updateProducte");
          break;
        case "eliminarProducte":
            this.myProductes.doAction("eliminarProducte", id);
          break;
        case "buscarCategoria":
          this.myCategories.doAction("getCategoriaByName");
          break;
        case "crearCategoria":
          this.myCategories.doAction("crearCategoria");
          break;
        case "insertCategoria":
          this.myCategories.doAction("insertCategoria");
          break;
        case "editarCategoria":
          
          this.myCategories.doAction("editarCategoria",id);
          break;
        case "updateCategoria":
          this.myCategories.doAction("updateCategoria");
          break;
        case "eliminarCategoria":
          this.myCategories.doAction("eliminarCategoria", id);
          break;
        

        default:
          // code block
      }


}

}