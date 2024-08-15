import { useContext } from "react";
import { get, put } from "../api/requests";
import { AuthContext } from "../context/AuthContext";

let baseURL = `http://localhost:3030/jsonstore/mensclothes/`
export default async function(data){
   
    let token = data.access;

    
    await put(`${baseURL}${data.id}`,data,token);

}


export  async function logOut() {
    const {local} = useContext();

    let URL = `http://localhost:3030/users/logout`;
    await get(URL);
    
    
}