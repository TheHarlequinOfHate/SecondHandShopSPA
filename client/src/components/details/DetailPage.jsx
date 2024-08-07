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
   
    return (
        <>
            <div className="flex flex-row h-screen bg-regal-blue ">
                <img className="flex h-4/6 border-2 rounded-lg shadow m-2" src={data.image} alt="Item Image" />
                <div className="flex-col space-y-4 ml-2 mt-3 w-full text-mustard ">
                    <h1 className="flex font-bold text-3xl ">{`${data.name}`}</h1>
                    <h2 className="flex font-bold text-2xl">Prive: {data.price} LV</h2>
                    <h2 className="flex font-bold text-2xl">Size: {data.size}</h2>
                    <h2 className="flex font-bold text-2xl">Color: {data.color}</h2>
                    <h2 className="flex font-bold text-2xl">Brand: {data.brand}</h2>
                    <h2 className="flex font-bold text-2xl">For: {data.category}</h2>
                    <h2 className="flex font-bold text-2xl">Description: {data.description}</h2>
                    <h3 className="flex font-bold text-2xl">Contanct Seller: {data.phoneNum}</h3>
                </div>

            </div>
        </>
    )
}

export async function getItemData(id) {
    const res = await get(`http://localhost:3030/jsonstore/menclothes/${id}`);
    return res
}