import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componentes/Home';
import Contacto from './componentes/Contacto';
import Categorias from './componentes/Categorias';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './componentes/About';
import Carrito from './componentes/Carrito';
import DetallesProducto from './componentes/DetallesProducto';
import MenuSecundario from './componentes/NavBar';
import "../src/componentes/styles.css";


function App() {
  const urlProductes = "http://localhost/MVC/db/productes.php";
  return (
    <Router>
      <div className='appContainer'>
        {/* Navbar de Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand card-title " to="/">INICIO</Link>
            <Link className="navbar-brand card-title" to="/carrito">
              <img src="/imagenes/carrito.png" alt='Carrito' style={{ width: "20px", height: "20px" }} />              
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="ms-auto no-estilos" >
        <li>
            <Link to="/about" className='link'>
                Acerca de
            </Link>
        </li>
        <li>
            <Link to="/contacto" className='link' >
                Contacto
            </Link>
        </li>
    </ul>
</div>

          </div>
        </nav>

        <MenuSecundario src="http://localhost/MVC/db/categories.php"></MenuSecundario>

        {/* Contenido principal con Bootstrap */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <Routes>
                <Route path="/" element={<Home src={urlProductes} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<Contacto />} />                
                <Route path="/categorias/:catid" element={<Categorias src={urlProductes}/>} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/detallesproducto/:id" element={<DetallesProducto src={urlProductes} />} />
              </Routes>
            </div>
          </div>
        </div>

        {/* Footer */}
        
          <footer className="bg-dark text-light text-center z-index-1 py-3 mt-4">
          © 2025 Mi Tienda - Todos los derechos reservados
          </footer>
        
      </div>
    </Router>
  );
}

export default App;
