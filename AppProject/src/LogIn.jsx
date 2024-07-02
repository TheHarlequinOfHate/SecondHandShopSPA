import { useState,useEffect } from "react";

function LogInPage(){

    return (
        <>
            <div>
                <form>
                    <label>Username:</label>
                    <input type="text" /><br></br>
                    <label>Password:</label>
                    <input type="text"></input><br></br>
                    <input type="submit"></input>

                </form>
            </div>
        </>

    )

}


export default LogInPage;
