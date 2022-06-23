import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import * as TokenAuth from "../routes/auth"


const RutaProtegida=() =>{
    const tokea =TokenAuth.getToken()
    let token =true;
     if (tokea === ""){
        token = false;
     }

    return (<>
       {<NavBar/>}
       {token ? <Outlet /> : <Navigate to="/"/>}
    </>)}

export default RutaProtegida
