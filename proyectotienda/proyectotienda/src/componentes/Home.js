// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from './ScrollTopButton';

function Home() {

  return (
    <div className="container my-5">
        {/*Boton para subir*/}
        <div>
            
            <ScrollToTopButton />
        </div>
    {/* Carrusel de imágenes */}
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="/imagenes/logo.png" className="d-block w-100 carousel-image" alt="Producto 1" />
            
        </div>
        <div className="carousel-item">
            <img src="/imagenes/productos.jpg" className="d-block w-100 carousel-image" alt="Producto 2" />
            
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>


    {/* Título de bienvenida */}
    <div className="text-center my-5">
        <h2 className="display-4">¡Bienvenido a nuestra tienda de productos electrónicos!</h2>
        <p className="lead">Explora nuestra amplia gama de productos electrónicos de última tecnología.</p>
    </div>

    {/* Sección de productos destacados */}
    <div className="row py-5">
    <h3 className="text-center mb-4">Productos Destacados</h3>

    {/* Producto 1 */}
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src="imagenes/8.jpg" className="card-img-top img-fluid fixed-image" alt="Producto 1" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Samsung Galaxy S23 Ultra</h5>
                <p className="card-text flex-grow-1">El último modelo con pantalla 6.8" y cámara de 200MP.</p>
                <Link className="btn btn-primary mt-auto" to="/detallesproducto/8">Ver Más</Link>
            </div>
        </div>
    </div>

    {/* Producto 2 */}
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src="imagenes/14.jpg" className="card-img-top img-fluid fixed-image" alt="Producto 2" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Portatil UltraPro</h5>
                <p className="card-text flex-grow-1">Potencia y precisión en cada detalle: pantalla 4K OLED, gráficos RTX y un rendimiento imparable para creativos y profesionales.</p>
                <Link className="btn btn-primary mt-auto" to="/detallesproducto/14">Ver Más</Link>
            </div>
        </div>
    </div>

    {/* Producto 3 */}
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src="imagenes/13.jpg" className="card-img-top img-fluid fixed-image" alt="Producto 3" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Auriculares Bluetooth</h5>
                <p className="card-text flex-grow-1">Sonido envolvente y comodidad, perfectos para cualquier ocasión.</p>
                <Link className="btn btn-primary mt-auto" to="/detallesproducto/13">Ver Más</Link>
            </div>
        </div>
    </div>
</div>

</div>

  );
}

export default Home;
