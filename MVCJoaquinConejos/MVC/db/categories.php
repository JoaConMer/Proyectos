<?php
header('Allow: GET, POST, PUT, DELETE');

// Incloem la classe d'accés a dades
require 'dbCategoria.php';


// Instància de la classe Dbproductes
$db = new DbCategorias();

// Verificar el método de la solicitud
$method = $_SERVER['REQUEST_METHOD'];

// Manejar las operaciones según el método
switch ($method) {
    case 'GET':
        // Si tenim parametre id mostrarem un producte per id,
        // Sinó els mostrem tots
        if (isset($_GET['catid'])) {
            $catid = $_GET['catid'];
            $categories = $db->getCategoriaByCat($catid); // Obtenim les dades a travès de la capa d'accés a dades
            echo json_encode($categories); // Ho passem a JSON
        } else if (isset($_GET['name'])) {
            $name = $_GET['name'];
            $categoria = $db->getCategoriaByName($name); // Obtenim les dades a travès de la capa d'accés a dades
            echo json_encode($categoria); // Ho passem a JSON
        } else{
            $categories = $db->getCategorias(); // Obtenim les dades a travès de la capa d'accés a dades
            
            echo json_encode($categories); // Ho passem a JSON
        }
        break;

    case 'POST':

        $contentType = $_SERVER['CONTENT_TYPE'] ?? '';

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
            $response = $db->insert($data['catid'], $data['nombre']);
            echo json_encode($response);
            
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => $e->getMessage()]);
        }
        

        break;
    case 'PUT':
        
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Insertem a través de la capa d'accés i tornem en JSON el resultat
        try
        {
            echo json_encode($db->update($data['catid'], $data['nombre']));
            echo json_encode($response);
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;

    case 'DELETE':
        // Eliminar un producto por ID
        
        parse_str(file_get_contents('php://input'), $data);
        $catid = $_GET['catid'];
            $categories = $db->delete($catid); // Obtenim les dades a travès de la capa d'accés a dades
            echo json_encode($categories); // Ho passem a JSON
        // Eliminem a través de la capa d'accés i tornem en JSON el resultat
        
        break;

    default:
        header('HTTP/1.1 405 Method Not Allowed');
        header('Allow: GET, POST, PUT, DELETE');
        break;
}
?>