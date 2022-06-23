import React, { useEffect, useState } from "react";
import DiagnosticoItem from "./DiagnosticoItem";

import * as DiagnosticoServer from './DiagnosticoServer'

//componentes


  const ListarDiagnostico = () => {
        const [diagnosticos, setDiagnostico] = useState([]);
        const listdiagnostico = async () => {
          try {
            const res = await DiagnosticoServer.listarPacientes("pacientes/");
            const data = await res.json();
            setDiagnostico(data.pacientes);
            console.log(res);
          } catch (error) {
            console.log(error)
          }
  };
  useEffect(() => {
    listdiagnostico();
  }, []);


  return (
    <div className="row">  
        {diagnosticos.map((diagnostico) =>(
        <DiagnosticoItem key={diagnostico.id} diagnostico={diagnostico}/>
    ))}
    </div>
  )
};

export default ListarDiagnostico;
