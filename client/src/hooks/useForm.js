import { useState } from "react"

export default function useForm (formHandler,startingValues) {
    const [values, setValues] = useState(startingValues);

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        formHandler(values)
        setValues(startingValues)
    }


    return {
        values,
        onChangeHandler,
        onSubmitHandler,
    }
}