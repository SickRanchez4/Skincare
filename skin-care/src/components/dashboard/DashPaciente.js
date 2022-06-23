import { useNavigate } from "react-router-dom";
import * as TokenAuth from "../../routes/auth";
export default function DashPaciente() {
    const navigate = useNavigate();
    const token = TokenAuth.getToken();
    const nombre = TokenAuth.getNombre();
    console.log(token);
    const handleClick = ()=>{
        TokenAuth.clearToken();
        navigate("/");
    }
    return (
        <div>
            <h1>Bienvenido a su Dash paciente {nombre}!!</h1>

            
        </div>
    );
}