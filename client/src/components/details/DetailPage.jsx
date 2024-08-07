import { useParams } from "react-router-dom"
import { get } from "../../api/requests"
import { useEffect, useState } from "react";

export default function DetailsPage() {
    let {id} = useParams();
    let [data,setData] = useState({});
    let normId = id.substring(1,);

    useEffect( () => {async function fetchData() {
        const res = await getItemData(normId);
        setData(res)
    } 
       fetchData()
    },[])
   
    
    console.log(data)
    return (
        <>
            <h1>{`${data.name}`}</h1>
            <div>
                <img src={data.image} alt="Item Image" />
            </div>
        </>
    )
}

export async function getItemData(id) {
    const res = await get(`http://localhost:3030/jsonstore/menclothes/${id}`);
    return res
}