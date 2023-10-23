import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

class MenuRutas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitales: [],
    };
  }

  componentDidMount() {
    this.loadHospitales();
  }

  loadHospitales = () => {
    var request = "webresources/hospitales";
    var url = Global.urlHospitales + request;
    console.log(url);
    axios.get(url)
      .then(response => {
        this.setState({
          hospitales: response.data,
        });
      })
      .catch(error => {
        console.error("Error al cargar los hospitales: ", error);
      });
  };

  render() {
    const dropdownStyle = {
      backgroundColor: 'white', // Cambia el fondo a blanco
      /* Agrega otros estilos según tus necesidades */
    };

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary border">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">Inicio</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hospitales
                </a>

                <ul className="dropdown-menu">
                      {this.state.hospitales.map((hospital,index)=>{
                          return(<li key={index}><NavLink className="nav-link"  to={"/hospital/"+hospital.idhospital}>{hospital.nombre}</NavLink></li>)
                })}
                                           
                </ul>

              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MenuRutas;
