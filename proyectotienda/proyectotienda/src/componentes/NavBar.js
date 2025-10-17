// src/components/Home.js
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
import "../componentes/styles.css";




function MenuSecundario(props) {
    const [categories, setCategories] = useState([]);

    const getCategorias = () =>{
        fetch(props.src) 
        .then((response) => response.json())
        .then((data) => setCategories(data));
    }

    useEffect(() => {
        getCategorias()
    }, []);

    return (
        <Navbar expand="md" className="nav-custom w-100 m-0 p-0">
      <Container fluid className="p-0">
        {/* No usamos Navbar.Collapse ni Navbar.Toggle, eliminamos la funcionalidad de colapso */}
        <Nav className="w-100 d-flex flex-column flex-md-row justify-content-center align-items-center p-0 m-0">
          {categories.map((categoria) => (
            <Nav.Item key={categoria.catid} className="text-center">
              <Link className="nav-link py-2 px-3" to={`/categorias/${categoria.catid}`}>
                <div className="categorias">{categoria.nombre}</div>
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </Navbar>

    

    
    );
}

export default MenuSecundario;
