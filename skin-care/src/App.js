import './App.css';
import styled from "styled-components";
//import styled from "styled-components";
//import { ObjectDetector } from './components/objectDetector';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
//componentes

import { RutaPrinicipal } from './routes/rutaPrincipal';
import DashPaciente from './components/dashboard/DashPaciente';
import ListarPaciente from './components/paciente/ListarPaciente';
import DashAdmin from './components/dashboard/DashAdmin';
import PacienteForm from './components/paciente/RegistrarsPaciente';
import VerPaciente from './components/paciente/VerPaciente';
import NavBar from './components/navBar/navBar';
import ListarDiagnostico from './components/diagnostico/ListarDiagnosticos';

/*const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #050;
`;*/

const Divprincipal = {
  width: "100%",
  height: "100vh",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  color: "#050",
};
const Divprimero = styled.div`
  width: 100%;
  height: 120vh;
  background-color: black;
  color: #050;
`;
//<ObjectDetector />
/*<div style={divcamara}>
    <NavBar />
      <div className='container my-4'>
      <ListarPaciente />
      </div>
    </div>*/
    /*
    <Router>
      <NavBar />
      <ListarPaciente />
      <Routes>
         <Route path='/' element={<div>Hello Home</div>} />
         <Route path='/HomePaciente' element={<DashPaciente/>} />
         <Route path='/ListarPacientes' element={<ListarPaciente/>} />
         <Route path='/VerPaciente' element={<Navigate to="/HomePaciente"/>} />
         
         <Route path='/HomeAdmin' element={<DashAdmin/>} />
         <Route path='/RegistrarPaciente' element={<PacienteForm/>} />
         <Route path='/VerPaciente/:id' element={<VerPaciente/>} />
         
         
      </Routes>
    </Router>
    */ 
   //<RutaPrinicipal/>
function App() {
  return(
    <Divprimero>
    <RutaPrinicipal/>
    </Divprimero>
  );
}

export default App;