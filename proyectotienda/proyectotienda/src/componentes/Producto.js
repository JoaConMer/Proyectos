import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Producto (props) {

  const linkTo = "/detallesproducto/" + props.id;


    return (
      <div className="producte card text-center p-3 shadow-sm">
        <h2 className="card-title">{props.name}</h2>
        <img 
          src={`/imagenes/${props.img}`} 
          className="card-img-top img-thumbnail mx-auto d-block" 
          alt={props.name} 
          style={{ width: "300px", height: "auto", objectFit: "cover" }} 
        />


        <p className="card-text fw-bold mt-2">{props.pvp}€</p>
        
        <div className="d-flex justify-content-center gap-2 mt-3">
          <Link className="btn btn-primary" to={linkTo}>Ver Más</Link>
          <Link className="btn btn-success" to="/carrito">Añadir al Carrito</Link>
        </div>

      </div>
    );
}

export default Producto;
