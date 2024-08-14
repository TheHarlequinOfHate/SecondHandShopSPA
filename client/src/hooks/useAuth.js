import { useNavigate } from 'react-router-dom';
import {login, register} from '../api/authenticate-api.js'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { loginValidation } from '../utils/loginValidation.js';


export const useLogin = () => {
    const navigate = useNavigate()
    const { changeAuthState } = useContext(AuthContext)




    const loginHandler = async (email,password) =>{

        const isValid = loginValidation(email,password);

        if(isValid){
            try {
                const result = await login(email,password);
                changeAuthState(result)
                navigate('/account')
            } catch(err){
                console.log(err.message);
            }    
        } else {
            return;
        } 
    }


   
    return loginHandler
}

