<?php

class DbProductes
{
    private $pdo; // Variable per a la connexió PDO

    // Constructor: inicializa la conexió a la bbdd
    public function __construct()
    {
        // Inclou l'arxiu de configuració
        $config = include 'dbConf.php';

        try {
            $this->pdo = new PDO( "mysql:host={$config['db_host']};dbname={$config['db_name']}",
                                   $config['db_user'],
                                   $config['db_pass']);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
        } catch (PDOException $e) {
            die("Error de conexión: " . $e->getMessage());
        }
    }

    // Retorna tots els productes
    public function getProductos()
    {
            
            $stmt = $this->pdo->query('SELECT p.*,c.nombre as categoria FROM categorias c INNER JOIN productos p ON c.catid = p.catid');
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Retorna els productes per id
    public function getProductosById($id)
    {
        $stmt = $this->pdo->prepare('SELECT * FROM productos WHERE id = :id');
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Retorna els productes per categoria
    public function getProductosByCat($catid)
    {
        $stmt = $this->pdo->prepare('SELECT * FROM productos WHERE catid = :catid');
        $stmt->bindParam(':catid', $catid, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Retorna els noms per categoria
    public function getNombreByCatId($catid)
    {
        $stmt = $this->pdo->prepare('SELECT p.*,c.nombre as categoria FROM categorias c INNER JOIN productos p ON c.catid = p.catid  where p.ca');
        $stmt->bindParam(':catid', $catid, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Retorna els productes per name
    public function getProductosByName($name)
    {
        $stmt = $this->pdo->prepare('SELECT * FROM productos WHERE name LIKE :name');
        $stmt->execute(['name' => '%'.$name.'%']);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    
    // Inserta nou producte
    public function insert($catid, $descripcio, $name, $referencia, $pvp)
    {
        $stmt = $this->pdo->prepare('INSERT INTO productos (catid, descripcio, name, referencia, pvp) VALUES (:catid, :descripcio, :name, :referencia, :pvp)');
        $stmt->bindParam(':catid', $catid, PDO::PARAM_INT);
        $stmt->bindParam(':descripcio', $descripcio, PDO::PARAM_STR);
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':referencia', $referencia, PDO::PARAM_STR);
        $stmt->bindParam(':pvp', $pvp, PDO::PARAM_INT);
        return $stmt->execute(); // Retorna true si la actualizació s'ha executat amb èxit
    }

    // Actualitza producte
    public function update($id, $catid, $descripcio, $name, $referencia, $pvp)
    {
        $stmt = $this->pdo->prepare('UPDATE productos SET catid = :catid, descripcio = :descripcio, name = :name, referencia = :referencia, pvp = :pvp WHERE id = :id');
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->bindParam(':catid', $catid, PDO::PARAM_INT);
        $stmt->bindParam(':descripcio', $descripcio, PDO::PARAM_STR);
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':referencia', $referencia, PDO::PARAM_STR);
        $stmt->bindParam(':pvp', $pvp, PDO::PARAM_INT);
        return $stmt->execute(); // Retorna true si la actualizació s'ha executat amb èxit
    }

    // Elimina producte per ID
    public function delete($id)
    {
        $stmt = $this->pdo->prepare('DELETE FROM productos WHERE id = :id');
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute(); // Retorna true si la actualizació s'ha executat amb èxit
    }
}