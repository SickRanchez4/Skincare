import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RealizarConsulta from '../components/consulta/RealizarConsulta';
import DashAdmin from '../components/dashboard/DashAdmin';
import DashPaciente from '../components/dashboard/DashPaciente';
import ListarDiagnostico from '../components/diagnostico/ListarDiagnosticos';
import VerDiagnostico from '../components/diagnostico/VerDiagnostico';
import { ObjectDetector } from '../components/objectDetector';
import ListarPaciente from '../components/paciente/ListarPaciente';
import Login2Form from '../components/paciente/Login';
import PacienteForm from '../components/paciente/RegistrarsPaciente';
import VerPaciente from '../components/paciente/VerPaciente';
import RutaProtegida from './rutaProtegida';

// <Route path='/VerPaciente' element={<Navigate to="/HomePaciente"/>} />
export const RutaPrinicipal=() =>{
return (
    <Router>
      <Routes>
      <Route path='/' element={<Login2Form/>} />
      
      <Route path='/Registrar' element={<PacienteForm/>} />
      <Route element={<RutaProtegida/>}>
            <Route path='/HomePaciente' element={<DashPaciente/>} />
            <Route path='/ListarPacientes' element={<ListarPaciente/>} />
            <Route path='/HomeAdmin' element={<DashAdmin/>} />
            <Route path="/VerPaciente"  element={<VerPaciente/>} />
            <Route path="/VerPaciente/:id" element={<VerPaciente/>} />
            <Route path='/RealizarConsulta' element={<RealizarConsulta/>} />
            <Route path='/RealizarConsultaDetectada' element={<ObjectDetector/>} />
            
            <Route path='/Diagnostico' element={<ListarDiagnostico/>} />
            <Route path='/Diagnostico/:id' element={<VerDiagnostico/>} /> 
      </Route>    
      </Routes>
    </Router>
);


}