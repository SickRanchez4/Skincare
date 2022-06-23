import { useNavigate } from "react-router-dom";
import * as TokenAuth from "../../routes/auth";
export default function DashPaciente() {
    const navigate = useNavigate();
    const token = TokenAuth.getToken();
    console.log(token);
    const handleClick = ()=>{
        TokenAuth.clearToken();
        navigate("/");
    }
    return (
        <div>
            <h1>Dash paciente papu!!</h1>
            <button onClick={handleClick}>Logout</button>

            
        </div>
    );
}