import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuRutas from './RutasHospitales/MenuRutas';
import Home from './RutasHospitales/Home';
import NotFound from './RutasHospitales/NotFound';
import Hospital from './RutasHospitales/Hospital';
import { useParams } from 'react-router-dom';
import Hospital2 from './RutasHospitales/Hospital2';

export default class Router extends Component {
  render() {

    function HospitalElement(){
      var {hospitalId} = useParams();
      return<Hospital hospitalId = {hospitalId}/>
    }

    function HospitalElement2(){
      var {hospitalId} = useParams();
      return<Hospital2 hospitalId = {hospitalId}/>
    }


    return (
      <BrowserRouter>
        <h1> MENU EN ROUTER</h1>
        <MenuRutas />
        <Routes>
          <Route path="/" element={<Home />} />
           {/* <Route path="/hospital/:hospitalId" element={<HospitalElement2 />} /> */}
          <Route path="/hospital/:hospitalId" element={<HospitalElement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}