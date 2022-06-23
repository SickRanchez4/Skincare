import React from "react";

const PacienteItem = ({ paciente }) => {
  //console.log(props.paciente);
  //   console.log(paciente);
  return (
    <div className=" col-md-4">
      <div className="card card-body">
        <h3 className="card-tittle">{paciente.nombre}</h3>
        <p className="card-text"> Edad : <strong>{paciente.edad}</strong></p>
        <p className="card-text"> Correo :<strong>{paciente.correo}</strong></p>
        <a href={paciente.id} className="btn btn-primary"> Ver</a>
      </div>
    </div>
  );
};

export default PacienteItem;
