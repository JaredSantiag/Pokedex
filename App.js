import React from 'react';
import './App.css';
import Buscador from './Componentes/Buscador';
import Encabezado from "./Componentes/Encabezado.js";
import Menu from './Componentes/Menu';
import PrimeraGen from "./Generaciones/PrimeraGen.js";


export default function App() {

  return (
    <body>
      <Encabezado/>
      <div>
        <aside><Menu/></aside>
        <div id="agrupar">
            <div><Buscador/></div>
            <div id="dex"><PrimeraGen/>
        </div>
        </div>
      </div>
    </body>
  );
}


