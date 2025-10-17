<?php
header('Allow: GET, POST, PUT, DELETE');

// Incloem la classe d'accés a dades
require 'dbProductes.php';


// Instància de la classe Dbproductes
$db = new DbProductes();

// Verificar el método de la solicitud
$method = $_SERVER['REQUEST_METHOD'];

// Manejar las operaciones según el método
switch ($method) {
    case 'GET':
        // Si tenim parametre id mostrarem un producte per id,
        // Sinó els mostrem tots
        if (isset($_GET['catid'])) {
            $catid = $_GET['catid'];
            $productos = $db->getProductosByCat($catid); // Obtenim les dades a travès de la capa d'accés a dades
            echo json_encode($productos); // Ho passem a JSON
        } else if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $productos = $db->getProductosById($id); // Obtenim les dades a travès de la capa d'accés a dades
            echo json_encode($productos); // Ho passem a JSON
            
        } else if(isset($_GET['name'])) {
            $name = $_GET['name'];
            $productos = $db->getProductosByName($name); // Obtenim les dades a travès de la capa d'accés a dades
            echo json_encode($productos); // Ho passem a JSON
        } else{
            $productos = $db->getProductos(); // Obtenim les dades a travès de la capa d'accés a dades
            
            echo json_encode($productos); // Ho passem a JSON
        }
        break;

    case 'POST':

        $contentType = $_SERVER['CONTENT_TYPE'] ?? '';

        // Insertar un nou estudiant
        // A data  tindrem un array associatiu amb els paràmetres que rebem per POST
        // Haurem de rebre les dades diferents si ens ve en format JSON, o per formulari POST
        // Ens haurem d'assegurar d'indicar bé el content type si cridem desde JS

         // TO-DEBUG -- PER A COMPROVAR QUE PASSA SI NO HO AGAFEM COM TOCA
        //echo json_encode($contentType);
        //$data = json_decode(file_get_contents('php://input'), true);
        //parse_str(file_get_contents('php://input'), $data);
        //echo json_encode($data);
        //break;

        // Amb este if ens assegurem que rebem $data com toca depenent del contentType
        // Sempre que el contentType sigue correcte i els paràmetres s'envien codificats com toca

        if (strpos($contentType, 'application/json') !== false) {
            // Si el Content-Type es JSON, usamos json_decode
            $data = json_decode(file_get_contents('php://input'), true);
        } elseif (strpos($contentType, 'application/x-www-form-urlencoded') !== false) {
            // Si el Content-Type es form-urlencoded, usamos parse_str
            parse_str(file_get_contents('php://input'), $data);
        } else {
            // Si el Content-Type no coincide con ninguno, enviamos un error
            header('HTTP/1.1 400 Bad Request');
            echo json_encode(['error' => 'Unsupported Content-Type']);
            exit;
        }
            
        // Insertem a través de la capa d'accés i tornem en JSON el resultat
        try
        {
            $response = $db->insert($data['catid'], $data['descripcio'], $data['name'], $data['referencia'],  $data['pvp'], $data['img_url']);
            echo json_encode($response);
            
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => $e->getMessage()]);
        }
        

        break;
    case 'PUT':
        // Actualitzar un estudiant existent
        //parse_str(file_get_contents('php://input'), $data);
        $data = json_decode(file_get_contents('php://input'), true);
        // Actualitzem a través de la capa d'accés i tornem en JSON el resultat

        
        // Insertem a través de la capa d'accés i tornem en JSON el resultat
        try
        {
            echo json_encode($db->update($data['id'], $data['catid'],$data['descripcio'], $data['name'], $data['referencia'], $data['pvp']));
            echo json_encode($response);
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;

    case 'DELETE':
        // Eliminar un producto por ID
        
        parse_str(file_get_contents('php://input'), $data);
        $id = $_GET['id'];
            $productos = $db->delete($id); // Obtenim les dades a travès de la capa d'accés a dades
            echo json_encode($productos); // Ho passem a JSON
        // Eliminem a través de la capa d'accés i tornem en JSON el resultat
        
        break;

    default:
        header('HTTP/1.1 405 Method Not Allowed');
        header('Allow: GET, POST, PUT, DELETE');
        break;
}
?>
