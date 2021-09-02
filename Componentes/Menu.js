import React from 'react'

import '../App.css';

class Menu extends React.Component{  
    state = {
      show: true
    }
  
    render() {
      if(this.state.show){
        return (
          <div id="menu">
            <h2>Menu</h2>
            <ul>
                <li>Primera Generacion</li>
                <li>Segunda Generacion</li>
                <li>Tercera Generacion</li>
                <li>Cuarta Generacion</li>
                <li>Quinta Generacion</li>
                <li>Sexta Generacion</li>
                <li>Septima Generacion</li>
                <li>Octava Generacion</li>
                <p></p> 
                <button onClick={() => this.setState({show: false})}>Cerrar Menu</button>
            </ul>
        </div>
        );
      }

      else{
        return(
          <h1>
            <button onClick={() => this.setState({show: true})}>Abrir menu</button>
          </h1>
        );
      }
    }
}

  export default Menu;