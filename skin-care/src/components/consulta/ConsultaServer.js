
import * as TokenAuth from "../../routes/auth"
const API_URL = "http://127.0.0.1:8000/api/";

export const listarConsultas = async (URLpaciente) => {
  return await fetch(API_URL+URLpaciente);
};

export const RegistrarConsulta = async (respuestas, imagen,  URLconsulta) => {
    console.log(TokenAuth.getId());
   // console.log(imagen);
    
    var data = new FormData();
    var imagedata = imagen
    data.append("imagen", imagedata);
    data.append("estado", 1);
    data.append("paciente_id", TokenAuth.getId());
    
    return await fetch(API_URL+URLconsulta, {
        mode: 'no-cors',
        method : 'POST',
        body: data
    });
  };
  
