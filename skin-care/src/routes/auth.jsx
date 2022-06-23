

    const initialState = "";
    let token = initialState;
    let validate = false;
    let nombre ="";
    let id="";
    export const getToken =  () => {
        return token;
      };
    export const setToken =  (tokenBack) => {
           token = tokenBack;
           validate = true;
      };
    export const clearToken = ()=>{
        token = initialState;
        validate = false;
    };
    export const getValidate = () =>{
        return validate;
    };
    export const setDatos =  (idP, nombreP) => {
      id = idP;
      nombre = nombreP;
    };
    export const getId= () =>{
      return id;
   };
   export const getNombre = () =>{
    return nombre;
   };


