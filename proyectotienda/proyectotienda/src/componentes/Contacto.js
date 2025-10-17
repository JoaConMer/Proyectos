import React from "react";
import ScrollToTopButton from "./ScrollTopButton";

const Contacto = () => {
  return (
    <div className="container my-5">
      {/*Boton para subir*/}
      <div>            
            <ScrollToTopButton />
        </div>
      {/* Título de la sección */}
      <div className="text-center mb-4">
        <h2 className="display-4">Contacta con Nosotros</h2>
        <p className="lead">
          ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para ayudarte.
          Completa el formulario a continuación o contáctanos a través de nuestras redes sociales.
        </p>
      </div>

      {/* Formulario de contacto */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Envíanos un mensaje</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="name" placeholder="Tu nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Escribe tu mensaje" required></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Información de contacto adicional */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h4>Información de Contacto</h4>
          <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo, País</p>
          <p><strong>Teléfono:</strong> +123 456 7890</p>
          <p><strong>Correo Electrónico:</strong> contacto@techstore.com</p>
          <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
        </div>
        <div className="col-md-6">
          <h4>Síguenos en Redes Sociales</h4>
          <p>
            ¡Síguenos en nuestras redes sociales y mantente al tanto de las últimas ofertas y novedades!
          </p>
          <div>
            <a href="https://www.facebook.com/TechStore" className="btn btn-outline-primary me-2">
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com/TechStore" className="btn btn-outline-info me-2">
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com/TechStore" className="btn btn-outline-danger me-2">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
