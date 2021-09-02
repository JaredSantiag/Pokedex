import React from 'react';
import { obtenerPokemones } from '../PokeApi';
import '../App.css';


const { useState, useEffect } = React;


const SegundaGen = () => {
    const [pokemones, setPokemones] = useState([]);

    const fetchPokemones = async () =>{
        try{
          const data = await obtenerPokemones(251, 151);
          setPokemones(data.results);
        }catch(error){
    
        }
    }

    useEffect(() => {
        fetchPokemones();
    }, []);

    return(
        <div id="dex">
            {pokemones.map(e => {
                return (
                    <div id="poke" key={e.name}>{e.name}
                    </div>
                )
            })
            }
        </div>
    )
};

export default SegundaGen;