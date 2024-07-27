import { useNavigate } from 'react-router-dom';
import {login} from '../api/authenticate-api.js'
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