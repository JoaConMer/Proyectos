import HomeView from "../views/HomeView.js";
import HomeModel from "../model/HomeModel.js";


export default class HomeController {
    constructor() {
        this.model = new HomeModel;		// crea el modelo
        this.view = new HomeView;		// crea la vista
    }
  
    init() {
        this.view.init();			// inicializa la vista, si es necesario
    }
    doAction(action)
    {
      switch(action) {
        case "getHome":
          let homeText = this.model.getHomeText();
          this.view.render(homeText);
          break;
       
      }
    }
  }


