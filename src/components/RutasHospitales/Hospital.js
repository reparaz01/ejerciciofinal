import React, { Component } from 'react';
import axios from 'axios';

class Hospital extends Component {
  state = {
    doctors: [],
  };

  loadDoctors = (hospitalId) => {
    const apiUrl = `https://apidoctoresroutes2023.azurewebsites.net/api/Doctores/DoctoresHospital/${hospitalId}`;

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          doctors: response.data,
        });
      })
      .catch(error => {
        console.error("Error al cargar los datos de los doctores: ", error);
      });
  };

  componentDidMount() {
    this.loadDoctors(this.props.hospitalId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.hospitalId !== prevProps.hospitalId) {
      this.loadDoctors(this.props.hospitalId);
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
              <th>ID del Doctor</th>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctors.map(doctor => (
              <tr key={doctor.idDoctor}>
                <td>{doctor.idDoctor}</td>
                <td>{doctor.apellido}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.salario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Hospital;
