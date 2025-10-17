export default class HomeModel {
    constructor() {
    }

    init()
    {}

    getHomeText()
    {
        
        const homeText = [{ "id":1,
                           "name": "saludo",
                           "text": "Hola que tal"
                          },
                          { 
                            "id":2,
                            "name": "footer",
                            "text": "Text del footer..."
                          }
                         ];
        return homeText;
    }
}