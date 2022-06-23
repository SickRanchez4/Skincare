import { useState } from "react";
import * as PacienteServer from "./PacienteServer";
import { useNavigate } from "react-router-dom";
import '../../assets/css/login.css'
const PacienteForm = () =>{
const initialState = {nombre:"", apellido:"", edad:"18", sexo:1, correo:"", contraseña:""};
const [paciente, setPaciente] = useState(initialState);
const navigate = useNavigate();
const handleInputChange = (e) =>{
  console.log(e.target.name);
  console.log(e.target.value);
  setPaciente({ ...paciente, [e.target.name]: e.target.value})
}

const handleSubmit = async (e) => {
 e.preventDefault();
 try {
  let res;
  res = await PacienteServer.RegistrarPacientes(paciente, "pacientes/");
  const data = await res.json();
  console.log(data);
  if(data.message === "Success"){
    setPaciente(initialState);
    navigate("/");
  }
 } catch (error) {
  console.log(error);
 }
}
    return (
      <div className="bodylogin">
      <div className="col-md-6 mx-auto">
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre </label>
    <input type="text" className="form-control" name="nombre" id="nombre" aria-describedby="nombreHelp"
    value={paciente.nombre} onChange={handleInputChange}
    minLength="2" maxLength="50" autoFocus required/>
    <div id="nombreHelp" className="form-text">Coloque su nombre en esta seccion.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="apellido" className="form-label">Apellido </label>
    <input type="text" className="form-control" name="apellido" id="apellido" aria-describedby="apellidoHelp"
    value={paciente.apellido} onChange={handleInputChange}
    minLength="2" maxLength="50" required/>
    <div id="apellidoHelp" className="form-text">Coloque su apellido.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="edad" className="form-label">Edad </label>
    <input type="number" className="form-control" name="edad" id="edad" aria-describedby="edadHelp"
    value={paciente.edad} onChange={handleInputChange} required/>
    <div id="edadHelp" className="form-text">Coloque su edad</div>
  </div>
  <div className="mb-3">
    <label htmlFor="correo" className="form-label">Correo </label>
    <input type="email" className="form-control" name="correo"  id="correo" aria-describedby="emailHelp"
    value={paciente.correo} onChange={handleInputChange}
    minLength="2" maxLength="100" required/>
    <div id="emailHelp" className="form-text">Ingrese Su correo Electronico.</div>
  </div>
  
  <div className="mb-3">
    <label htmlFor="contraseña" className="form-label">Contraseña </label>
    <input type="password" className="form-control" name="contraseña" id="contraseña" 
    value={paciente.contraseña} onChange={handleInputChange}
    minLength="2" maxLength="50" required/>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="sexo" id="sexoM" 
  value="M" onChange={handleInputChange} />
  <label className="form-check-label" htmlFor="sexoM">
    Masculino
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="sexo" id="SexoF"  
  value="F" onChange={handleInputChange} />
  <label className="form-check-label" htmlFor="SexoF">
   Femenino
  </label>
</div>
  <button type="submit" className="btn btn-primary">Registrar</button>
</form>
</div>
</div>
    );
}

export default PacienteForm