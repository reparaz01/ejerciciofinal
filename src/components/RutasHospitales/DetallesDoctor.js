import React, { Component } from 'react';
import axios from 'axios';

class DetallesDoctor extends Component {
  state = {
    doctor: null,
  };

  componentDidMount() {
    // Cargar los detalles del doctor cuando el componente se monta
    this.loadDoctorDetails(this.props.id);
  }

  loadDoctorDetails = (doctorId) => {
    const apiUrl = `https://apidoctoresroutes2023.azurewebsites.net/api/Doctores/${doctorId}`;

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          doctor: response.data,
        });
      })
      .catch(error => {
        console.error("Error al cargar los detalles del doctor: ", error);
      });
  };

  render() {
    const { doctor } = this.state;

    if (doctor) {
      return (
        <div>
          <h3>Detalles del Doctor</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID del Doctor</th>
                <th>Apellido</th>
                <th>Especialidad</th>
                <th>Salario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{doctor.idDoctor}</td>
                <td>{doctor.apellido}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.salario}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return <p>Cargando detalles del doctor...</p>;
    }
  }
}

export default DetallesDoctor;
