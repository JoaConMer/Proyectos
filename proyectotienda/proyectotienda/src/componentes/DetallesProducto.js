// src/components/Home.js
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Carrito from './Carrito';

function DetallesProducto(props) {
  const { id } = useParams();
  const [producte, setProductes] = useState([]);

    const getProductes = (id) =>{
        if (!id) return;
        const url = props.src + `?id=${id}`;
        fetch(url) 
        .then((response) => response.json())
        .then((data) => setProductes(data));
    }

    useEffect(() => {
        getProductes(id)
    }, [id]);

    

  return (
    
    <div className="producte card p-3 shadow-sm d-flex flex-column align-items-center justify-content-center">
  
  {/* Imagen del producto */}
  <img 
    src={`/imagenes/${producte.img_url}`} 
    className="card-img img-thumbnail mb-3 img-fluid" 
    alt={producte.name} 
    style={{ objectFit: "contain", maxHeight: "300px", width: "100%" }} 
  />
  
  <div className="text-center w-100">
    <h2 className="card-title">{producte.name}</h2>
    <p>{producte.descripcion}</p>
    
    {/* Verificar si existe un video y mostrarlo */}
    {producte.video && (
      <div className="video-container my-3">
        <iframe 
          width="100%" 
          height="500" 
          src={`https://www.youtube.com/embed/${producte.video}`} 
          title={producte.name} 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    )}

    <h3 className="card-text fw-bold mt-2">{producte.pvp}€</h3>

    <Link className="btn btn-success" to="/carrito">Añadir al Carrito</Link>
  </div>
</div>






  
  );
}

export default DetallesProducto;
