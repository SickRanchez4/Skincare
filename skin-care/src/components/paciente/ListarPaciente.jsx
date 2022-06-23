import React, { useEffect, useState } from "react";

import * as PacienteServer from './PacienteServer'

//componentes
import PacienteItem from "./pacienteItem";


  const ListarPaciente = () => {
        const [pacientes, setPacientes] = useState([]);
        const listPacientes = async () => {
          try {
            const res = await PacienteServer.listarPacientes("pacientes/");
            const data = await res.json();
            setPacientes(data.pacientes);
            console.log(res);
          } catch (error) {
            console.log(error)
          }
  };
  useEffect(() => {
     listPacientes();
  }, []);


  return (
    <div className="row">  
        {pacientes.map((paciente) =>(
        <PacienteItem key={paciente.id} paciente={paciente}/>
    ))}
    </div>
  )
};

export default ListarPaciente;
