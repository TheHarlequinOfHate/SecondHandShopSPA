import { useState } from "react"

export default function useForm (loginHandler,startingValues) {
    const [values, setValues] = useState(startingValues);

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onLoginClick = (e) => {
        e.preventDefault();

        loginHandler(values)
        
        setValues(startingValues)
    }

    return {
        values,
        onChangeHandler,
        onLoginClick,
    }
}