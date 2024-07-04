import { useEffect,useState } from "react";

export default function LogInPage () {
    const [usernameValue,setUsernameValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('')
    const [clickedValue, setClickedValue] = useState(false);

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);

    }


    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setClickedValue(true)
    }

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameValue,
                password: passwordValue
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then((response) => response.json());

        setUsernameValue('');
        setPasswordValue('');

       
    },[clickedValue])
    
    return (
        
        <>
            <div>
                <h2>Log In</h2>
                <form >
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={usernameValue}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={passwordChangeHandler} value={passwordValue}/>

                    <button type="button" onClick={submitHandler}>Log In</button>
                </form>
            </div>
        </>

    )
}