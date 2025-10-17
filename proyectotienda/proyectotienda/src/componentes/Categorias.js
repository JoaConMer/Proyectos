// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producte from './Producto';
import ScrollToTopButton from './ScrollTopButton';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Categorias(props) {
    const { catid } = useParams();
    const [productes, setProductes] = useState([]);

    const getProductes = (catid) => {
        if (!catid) return; // Evita llamar a fetch con un catid vacío
        const url = props.src + `?catid=${catid}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setProductes(data) )
            .catch((error) => console.error("Error al obtener productos:", error));
    };

    useEffect(() => {
        console.log("hola")
        getProductes(catid);
    }, [catid]);

    return (
        <>
        {/*Boton para subir*/}
        <div>
            
            <ScrollToTopButton />
        </div>
            
        
        <Container>
  <Row className="g-3"> {/* Espaciado entre columnas */}
    {productes.map((producte) => (
      <Col key={producte.id} xs={6} md={4} lg={3}>
        {/* Tarjeta con sombra suave, borde redondeado y transición */}
        <div className="card text-center p-2 shadow-sm rounded h-100 d-flex flex-column">
          
          {/* Contenedor de imagen con efecto hover de zoom */}
          <div className="d-flex justify-content-center align-items-center" style={{ height: "200px", overflow: "hidden" }}>
          <Link className="w-100 h-100" to={`/detallesProducto/${producte.id}`}>
              
            <img
              src={`/imagenes/${producte.img_url}`}
              className="card-img-top img-thumbnail product-image"
              alt={producte.name}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", transition: "transform 0.3s ease" }}
              
            />
            </Link>
          </div>

          {/* Cuerpo de la tarjeta con flex para alineación uniforme */}
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title">{producte.name}</h5>
            <p className="card-text fw-bold">{producte.pvp}€</p>

            {/* Botones alineados al fondo */}
            <div className="mt-auto d-flex justify-content-center gap-2">
              <Link className="btn btn-primary btn-sm" to={`/detallesProducto/${producte.id}`}>
                Ver Más
              </Link>
              <Link className="btn btn-success btn-sm" to="/carrito">
                <img src="/imagenes/carrito.png" alt='Carrito' style={{ width: "20px", height: "20px" }} />  
              </Link>
            </div>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</Container>



        </>
    );
}

export default Categorias;
