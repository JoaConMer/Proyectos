import { useState, useEffect } from "react";
import Producto from "./Producto.js";
function Productes(props) {
 
  /** 
   *  PRIMER BUSCA TOTS ELS PRODUCTES
   *  QUAN FEM CLICK AL BOTÓ BUSCARÀ SEGONS EL NOM
   */

  // Estat per als productes
  const [productes, setProductes] = useState([]);
 /// Estat per al text de búsqueda
  const [searchText, setSearchText] = useState("");

  // Obté les dades del servidor
  const getProductes=(url)=>{
     fetch(url)
    .then((response) => response.json())  
    .then((myJson) => {
          // canvia l'estat
          setProductes(myJson);
        }
    );

  }

  //Controlem el searchText
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  // Controlem el click del botó
  const handleClick = (e) => {
      // Aquí li passem un paràmetre per get a getProductes que agafem de l'estat
        getProductes(props.src + "?name=" + searchText);
  };


  // S'executarà al fer el primer render pq ho indica el paràmetre ,[]
  useEffect(()=>{
    getProductes(props.src)
  },[searchText]);

  return (
    <>
    
      <label>Buscar</label>
      { /**L'input per buscar actualitza l'estat del pare */}
      <input id="txtSearch" type="Text"  onChange={handleChange}></input>
      <button onClick={handleClick}> Buscar</button>

      { /**RENDER DELS PRODUCTES */}
      {productes.map((producte) => 
        <Producto id={producte.id} name={producte.name} pvp={producte.pvp} img={producte.img_url}  />)
      }
    </>)
    ;
  }
  
  export default Productes;