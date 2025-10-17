import React from "react";
import ScrollToTopButton from "./ScrollTopButton";

const About = () => {
  return (
    <div className="container my-5">

      {/*Boton para subir*/}
      <div>
            
            <ScrollToTopButton />
        </div>
      {/* Título de la sección */}
      <div className="text-center my-5">
        <h2 className="display-4">Acerca de TechStore</h2>
        <p className="lead">
          Tu tienda de confianza para los mejores productos electrónicos de última tecnología.
        </p>
      </div>

      {/* Descripción de la empresa */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h4>¿Quiénes somos?</h4>
          <p>
            En <strong>TechStore</strong>, nos apasiona la tecnología y estamos comprometidos en ofrecer a nuestros
            clientes los mejores productos electrónicos del mercado. Desde smartphones, laptops, hasta accesorios de
            última generación, nuestra tienda está diseñada para satisfacer todas las necesidades tecnológicas de nuestros
            clientes. Nos encontramos en el corazón de la ciudad, donde puedes visitarnos para recibir la mejor atención
            personalizada.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Nuestra Misión</h4>
          <p>
            Nuestra misión es ofrecer productos innovadores, de alta calidad y al alcance de todos, mejorando la experiencia
            tecnológica de nuestros clientes con un excelente servicio al cliente. Queremos ser tu primer destino para
            cualquier necesidad tecnológica.
          </p>
        </div>
      </div>

      {/* Información de ubicación */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h3>Visítanos</h3>
          <p>
            Estamos ubicados en la calle principal de la ciudad, cerca del centro comercial. Te invitamos a venir y conocer
            todos nuestros productos en persona. ¡Te esperamos!
          </p>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center ">
            {/* Google Maps embebido */}
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.06397013381235!2d-0.03447840106663548!3d40.17542306212994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5ff7a631f2c8cf%3A0x988085945e9bbc15!2sBarbero%20Mick!5e0!3m2!1ses!2ses!4v1738758111353!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa TechStore"
            ></iframe>
            
          </div>
        </div>
      </div>

      {/* Servicios ofrecidos */}
      <div className="row text-center mb-5">
        <h3 className="col-12 mb-4">Nuestros Servicios</h3>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Venta de Productos Electrónicos</h5>
              <p>Ofrecemos una amplia gama de productos electrónicos, desde smartphones hasta dispositivos de hogar inteligente.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Equipo de trabajo */}
      <div className="text-center">
        <h3>Conoce a nuestro equipo</h3>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" alt="Joaquin Conejos" className="card-img-top rounded-circle" />
              <div className="card-body">
                <h5 className="card-title">Joaquin Conejos</h5>
                <p className="card-text">Fundador y CEO. Visionario en la tecnología y amante de los gadgets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
