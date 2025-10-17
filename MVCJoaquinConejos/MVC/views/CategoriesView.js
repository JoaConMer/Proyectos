export default class CategoriesView {
    constructor() {
      
    }
  
    init() {// inicializa la vista, si es necesario
        this.render()			
    }

    render(categorias) {
        $("#mvc-main").load("./views/categories.html", function () {
            // Crear la tabla con clases de Bootstrap
            let result = "<table class='table table-striped table-bordered'>"; // Tabla con estilos de Bootstrap
            result += "<thead class='table-primary'>"; // Cabecera con fondo azul claro
            result += "<tr>";
            result += "   <th>CatId</th>";
            result += "   <th>Nombre</th>";
            result += "   <th>EDIT</th>";
            result += "   <th>ELIMINAR</th>";
            result += "</tr>";
            result += "</thead>";
            result += "<tbody>"; // Cuerpo de la tabla
    
            // Iterar sobre las categorías
            $.map(categorias, function (categoria, index) {
                result += "<tr>";
                result += "<td>" + categoria.catid + "</td>";
                result += "<td>" + categoria.nombre + "</td>";
                result +=
                    "<td><button data-mvcid='" +
                    categoria.catid +
                    "' class='btn btn-warning btn-sm mvc-clickable' name='editarCategoria'>Edit</button></td>"; // Botón de editar con estilo Bootstrap
                result +=
                    "<td><button data-mvcid='" +
                    categoria.catid +
                    "' class='btn btn-danger btn-sm mvc-clickable' name='eliminarCategoria'>Eliminar</button></td>"; // Botón de eliminar con estilo Bootstrap
                result += "</tr>";
            });
    
            result += "</tbody>";
            result += "</table>";
    
            // Agregar la tabla al contenedor
            $("#mvc-main").append(result);
        });
    }
    

    getTextSearch()
    {
    return $("#txtNameSearch").val();
    }

}
