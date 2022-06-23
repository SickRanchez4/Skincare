import { useState } from "react";
import * as ConsultaServer from "./ConsultaServer" 
const RealizarConsulta = () => {
    const initialState = {respuesta:""};
    const [consulta, setPaciente] = useState(initialState);
    const [imgData, setImgData] = useState(null);


    const handleInputChange = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        setPaciente({ ...consulta, [e.target.name]: e.target.value})
      }

    const OnselectImage = (e) =>{
        const file = e.target.files[0];
       // console.log(e.target.name);
        console.log(file);
        setImgData(file);
       // setPaciente({ ...consulta, [e.target.name]: e.target.value})
      } 



    const handleSubmit = async (e) => {
        e.preventDefault();

       console.log("enviado")
       try {
        let res;
        res = await ConsultaServer.RegistrarConsulta(consulta, imgData,"crearconsulta/");
        //const data = await res.json();
        console.log(res);
       } catch (error) {
        console.log(error);
       }
    }


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Respuesta
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="respuesta"
          value={consulta.respuesta} onChange={handleInputChange}
        />
        <div id="emailHelp" className="form-text">
          Coloque respuesta
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileSm" className="form-label">
         Seleccione la Imagen
        </label>
        <input
          className="form-control form-control-sm"
          id="formFileSm"
          type="file"
          onChange={OnselectImage}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RealizarConsulta;
