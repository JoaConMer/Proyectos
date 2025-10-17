<?php

class DbCategorias
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
    public function getCategorias()
    {
            $stmt = $this->pdo->query('SELECT * FROM categorias');
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Retorna els productes per name
    public function getCategoriaByName($name)
    {
        $stmt = $this->pdo->prepare('SELECT * FROM categorias WHERE name LIKE :name');
        $stmt->execute(['name' => '%'.$name.'%']);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Retorna els productes per categoria
    public function getCategoriaByCat($id)
    {
        $stmt = $this->pdo->prepare('SELECT * FROM categorias WHERE catid = :catid');
        $stmt->bindParam(':catid', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    
    // Inserta nou categoria
    public function insert($id, $nombre)
    {
        $stmt = $this->pdo->prepare('INSERT INTO categorias (catid, nombre) VALUES (:catid, :nombre)');
        $stmt->bindParam(':catid', $id, PDO::PARAM_INT);
        $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
        return $stmt->execute(); // Retorna true si la actualizació s'ha executat amb èxit
    }

    // Actualitza categoria
    public function update($id, $nombre)
    {
        $stmt = $this->pdo->prepare('UPDATE categorias SET nombre = :nombre WHERE catid = :catid');
        $stmt->bindParam(':catid', $id, PDO::PARAM_INT);
        $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
        return $stmt->execute(); // Retorna true si la actualizació s'ha executat amb èxit
    }

    // Elimina categoria per ID
    public function delete($id)
    {
        $stmt = $this->pdo->prepare('DELETE FROM categorias WHERE catid = :catid');
        $stmt->bindParam(':catid', $id, PDO::PARAM_INT);
        return $stmt->execute(); // Retorna true si la actualizació s'ha executat amb èxit
    }
}