import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const VerPaciente = () => {
  //console.log(props.paciente);
  //   console.log(paciente);
  const userId = 10;
  const {id} = useParams();
  console.log(id);
  return (
    <div className=" col-md-4">
      <div className="card card-body">
        <h3 className="card-tittle"><Link to={`/VerPaciente/${userId}`}>Uusario 10</Link></h3>
        <p className="card-text"> Edad : </p>
        <p className="card-text"> Correo :</p>
        <a href="#" className="btn btn-primary"> Ver</a>
      </div>
    </div>
  );
};

export default VerPaciente;
