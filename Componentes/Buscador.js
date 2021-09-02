import React from 'react';
import { buscarPokemon } from '../PokeApi';
import '../App.css';

const { useState } = React;

const Buscador = () => {

    const [pokemon, setPokemon] = useState("");
    const [dataPokemon, setDataPokemon] = useState("");

    const onChange = (e) => {
        setPokemon(e.target.value);
    };

    const onClick = async (e) => {
        if(pokemon == ""){
            alert("Coloque un pokemon")
        }
        else{
            const info = await buscarPokemon(pokemon);
            setDataPokemon(info);
        }
    };
    
    return(
        <div>
            <div id="busqueda">
                <label>
                    Pokemon <input onChange={onChange}></input>
                </label>
                <button onClick={onClick}> Buscar </button>
            </div>

            <div id="infoPoke">
                { dataPokemon &&
                    <div>
                        <div>Nombre: {dataPokemon.name}</div>
                        <div>Numero: {dataPokemon.id}</div>
                        
                        <div>Tipos: {
                                dataPokemon.types.map(e => <lu key={e.type.name}>
                                    <li>{e.type.name}</li>
                                </lu>
                                )
                            }
                        </div>
                        
                        <div>Peso: {dataPokemon.weight}</div>
                        <div>Altura: {dataPokemon.height}</div>
                        
                        <img src={dataPokemon.sprites.front_default}/>
                    </div>
                }
            </div>
        </div>
    );    
};

  
export default Buscador;