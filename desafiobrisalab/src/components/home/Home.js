import React from "react";
import astronaut from "./Astronaut-pana1.png";
import image4 from "./image4.png";
import "./Home.css";

function Home (){
  return (
    <div>
         <nav className='navBar'>
             <img src = {image4} className="logo"></img>
            <ul>
                <li>
                    <a>Favoritos</a>
                </li>
                <li>
                    <a>Procurar</a>
                </li>
                <li>
                    <a>Ver todos</a>
                </li>
            </ul>
        </nav>
    
      <div>
        <img src={astronaut} className="astronaut"></img>
        <h3>Está meio vazio por aqui!</h3>
        <h5>Procure por pokémons para adicioná-los aos seus favoritos</h5>
        <button className="buttonSearch">Procurar pokémons</button>
      </div>
    </div>
  );
}

export default Home