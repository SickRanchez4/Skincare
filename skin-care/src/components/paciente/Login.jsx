import { useState } from "react";
import * as PacienteServer from "./PacienteServer"
import * as TokenAuth from "../../routes/auth"
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../../assets/css/login.css'
const Login2Form = () =>{
const initialState = {correo:"", contraseña:""};
const [paciente, setPaciente] = useState(initialState);
const navigate = useNavigate();
console.log(TokenAuth.getValidate());
/*if (TokenAuth.getValidate()){
  navigate("/HomePaciente")
}*/
const handleInputChange = (e) =>{
  console.log(e.target.name);
  console.log(e.target.value);
  setPaciente({ ...paciente, [e.target.name]: e.target.value})
}

const handleSubmit = async (e) => {
 e.preventDefault();
 try {
    const data = {'id':5, 'nombre':'brandon'};
	const token = 'efalaskahfgjiuxxxa';
	TokenAuth.setToken(token);
    TokenAuth.setDatos(data.id, data.nombre)
    navigate("/HomePaciente")
 /* let res;
  res = await PacienteServer.LoginPaciente(paciente,"login/");
  const data = await res.json();
  console.log(data);
  if(data.jwt){
    console.log(data.jwt);
    const token = data.jwt;
    TokenAuth.setToken(token);
    TokenAuth.setDatos(data.id, data.nombre)
    navigate("/HomePaciente")
  }else{
    navigate("/");
    console.log(data);
  }*/
 } catch (error) {
  console.log(error);
 }
}
    return (

<div className="bodylogin">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
    
<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Login</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="email" className="form-control" placeholder="Correo"
                         name="correo"  id="correo"
                        value={paciente.correo} onChange={handleInputChange}
                        minLength="2" maxLength="100" required
                        />
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="contraseña"
                        name="contraseña" id="contraseña" 
                        value={paciente.contraseña} onChange={handleInputChange}
                        minLength="2" maxLength="50" required
                        />
					</div>
					<div className="form-group">
						<input type="submit" value="Ingresar" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center db_links">
					No tienes Cuenta?<Link  to='/Registrar'>Registrarse</Link>
				</div>
			</div>
		</div>
	</div>
</div>
</div>


    );
}

export default Login2Form