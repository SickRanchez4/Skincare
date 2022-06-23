import { Link, NavLink , useNavigate} from "react-router-dom";
import * as TokenAuth from "../../routes/auth";
const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    TokenAuth.clearToken();
    navigate("/");
}
  return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/HomePaciente'>MedicPiel</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/Diagnostico'>Diagnostico</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/RealizarConsulta'>Consulta</NavLink>
        </li>     
        <li className="nav-item">
          <NavLink className="nav-link" to='/RealizarConsultaDetectada'>DetectarConsulta</NavLink>
        </li>    
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuario
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to='/HomePaciente'>Paciente</NavLink></li>
            <li><NavLink className="dropdown-item" to='/ListarPacientes'>Listar Paciente</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to='/VerPaciente'>Ver Paciente</NavLink></li>
          </ul>
        </li>
      </ul>
      <button className="btn btn-danger" onClick={handleClick}>Logout</button>
    </div>
  </div>
</nav>
    );
};

export default NavBar;