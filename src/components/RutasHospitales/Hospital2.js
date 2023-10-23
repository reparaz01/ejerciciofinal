import React, { Component } from 'react';
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor';

class Hospital2 extends Component {
  state = {
    doctors: [],
    doctorSeleccionado: null, 
  };

  loadDoctores = (hospitalId) => {
    const apiUrl = `https://apidoctoresroutes2023.azurewebsites.net/api/Doctores/DoctoresHospital/${hospitalId}`;

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          doctors: response.data,
          selectedDoctor: null, // Reinicializa el doctor seleccionado
        });
      })
      .catch(error => {
        console.error("Error al cargar los datos de los doctores: ", error);
      });
  };

  componentDidMount() {
    this.loadDoctores(this.props.hospitalId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.hospitalId !== prevProps.hospitalId) {
      this.loadDoctores(this.props.hospitalId);
    }
  }



  render() {
    return (
      <div>
        <h2>Hospital ID: {this.props.hospitalId}</h2>

        <h3>Doctores del Hospital:</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctors.map(doctor => (
              <tr key={doctor.idDoctor}>
                <td>{doctor.apellido}</td>
                <td>{doctor.nombre}</td>
                <td>
                <button
                    onClick={() => {
                        const doctorId = doctor.id;
                        return <DetallesDoctor id={doctorId} />;
                    }}
                    className="btn btn-primary"
                    >
                    Detalles
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Hospital2;
