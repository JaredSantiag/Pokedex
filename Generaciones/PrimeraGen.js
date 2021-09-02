import React from 'react';
import { obtenerPokemones } from '../PokeApi';
import '../App.css';


const { useState, useEffect } = React;


export default function PrimeraGen() { 
    const state = {
        show: true
    }

    const [pokemones, setPokemones] = useState([]);

    const fetchPokemones = async () =>{
        try{
          const data = await obtenerPokemones(151, 0);
          setPokemones(data.results);
        }catch(error){
    
        }
    }

    useEffect(() => {
        fetchPokemones();
    }, []);

    return(
        <body>
            <h3 id="busqueda">Primera Generacion</h3>
            <div id="dex">
            {pokemones.map(e => {
                return (
                    <div id="poke" key={e.name}>{e.name}
                    </div>
                )
            })
            }
        </div>
        </body>
    )
};