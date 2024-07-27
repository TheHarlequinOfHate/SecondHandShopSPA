import { useNavigate } from 'react-router-dom';
import {login, register} from '../api/authenticate-api.js'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';


export const useLogin = () => {
    const navigate = useNavigate()
    const { changeAuthState } = useContext(AuthContext)


    const loginHandler = async (email,password) =>{
        try {
            const result = await login(email,password);
            changeAuthState(result)
            navigate('/account')
        } catch(err){
            console.log(err.message);
        }
    }


   
    return loginHandler
}

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email,password) => {
        const result = await register(email,password);
            
        changeAuthState(result);

        return result;
    }

    return registerHandler;

};