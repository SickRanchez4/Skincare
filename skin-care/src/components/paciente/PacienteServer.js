
const API_URL = "http://127.0.0.1:8000/api/";

export const listarPacientes = async (URLpaciente) => {
  return await fetch(API_URL+URLpaciente);
};

export const RegistrarPacientes = async (newPaciente, URLpaciente) => {
    return await fetch(API_URL+URLpaciente, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            "email": String(newPaciente.correo).trim(),
            "user_name": String(newPaciente.correo).trim(),
            "password": String(newPaciente.contraseña).trim(),
            "nombre": String(newPaciente.nombre).trim(),
            "apellido": String(newPaciente.apellido).trim(),
            "edad": parseInt(newPaciente.edad),
            "sexo": String(newPaciente.sexo).trim(),       
        })    
    });
  };
  
  export const LoginPaciente = async (LPaciente, URLOGIN) => {
    return await fetch(API_URL+URLOGIN, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            "email": String(LPaciente.correo).trim(),
            "password": String(LPaciente.contraseña).trim(),    
        })    
    });
  };