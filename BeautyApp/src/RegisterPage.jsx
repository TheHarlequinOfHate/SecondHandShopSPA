import { useEffect,useState } from "react";

export default function RegisterPage () {
    const [usernameValue,setUsernameValue] = useState('');
    const [emailValue,setEmailValue] = useState('')
    const [passwordValue,setPasswordValue] = useState('')
    const [clickedValue, setClickedValue] = useState(false);

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);

    }

    const emailChangeHandler = (e) => {
        setEmailValue(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setClickedValue(true)
    }

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users/register', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameValue,
                email: emailValue,
                password: passwordValue
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => response.json());

        setUsernameValue('');
        setEmailValue('');
        setPasswordValue('');

       
    },[clickedValue])
    
    return (
        
        <>
            <div>
                <h2>Register</h2>
                <form >
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={usernameValue}/>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={emailChangeHandler} value={emailValue} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={passwordChangeHandler} value={passwordValue}/>

                    <button type="button" onClick={submitHandler}>Register</button>
                </form>
            </div>
        </>

    )
}