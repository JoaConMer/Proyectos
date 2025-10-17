
export default class ProductesView {
    constructor() {
      
    }
  
    init() {// inicializa la vista, si es necesario
        this.render()			
    }

    render(productos) {
        $("#mvc-main").load("./views/productes.html", function () {
            // Construcción de la tabla con estilo Bootstrap
            let result = "<table class='table table-striped table-bordered'>";
            result += "<thead class='table-primary'>";
            result += "<tr>";
            result += "   <th>ID</th>";
            result += "   <th>Name</th>";
            result += "   <th>Descripció</th>";
            result += "   <th>Categoria</th>";
            result += "   <th>PVP</th>";
            result += "   <th>Referència</th>";
            result += "   <th>EDIT</th>";
            result += "   <th>ELIMINAR</th>";
            result += "</tr>";
            result += "</thead>";
    
            result += "<tbody>";
            $.map(productos, function (producto, index) {
                result += "<tr>";
                result += "<td>" + producto.id + "</td>";
                result += "<td>" + producto.name + "</td>";
                result += "<td>" + producto.descripcio + "</td>";
                result += "<td>" + producto.categoria + "</td>";
                result += "<td>" + producto.pvp + "€</td>";
                result += "<td>" + producto.referencia + "</td>";
                result +=
                    "<td><button data-mvcid='" +
                    producto.id +
                    "' class='btn btn-warning btn-sm mvc-clickable' name='editarProducte'>Edit</button></td>";
                result +=
                    "<td><button data-mvcid='" +
                    producto.id +
                    "' class='btn btn-danger btn-sm mvc-clickable' name='eliminarProducte'>Eliminar</button></td>";
                result += "</tr>";
            });
            result += "</tbody>";
    
            result += "</table>";
    
            // Insertar la tabla generada
            $("#mvc-main").append(result);
        });
    }
    

   
// Retornarà el text a buscar
getTextSearch()
{
return $("#txtNameSearch").val();
}

}
