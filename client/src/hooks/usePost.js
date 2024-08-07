import { useNavigate } from "react-router-dom";
import { post } from "../api/requests";
import { useState } from "react";

let baseUrl = 'http://localhost:3030/jsonstore/menclothes'

export default  function usePost (data) {
    let toArrData = Object.values(data)

    if(toArrData.includes('Women')){
        baseUrl = "http://localhost:3030/jsonstore/womenclothes"
    }else {
        baseUrl = 'http://localhost:3030/jsonstore/menclothes'
    }



    const postHandler = async () => {
        const result =  await post(baseUrl,data)
        return result

    }

    postHandler(data)


}


