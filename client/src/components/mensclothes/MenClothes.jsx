import { useEffect, useState } from "react";
import Cards from "./itemCard";
import * as  menAPI  from "../../api/menclothesAPI";
import { Link } from "react-router-dom";

export default function MenClothes(){
    let [menClothes, setMenClothes] = useState([])

    useEffect(() =>  {
        (async () => {
            menAPI.getMenClothes().then(result => setMenClothes(result))
            
        })()
    }, [])

    return(
        <>
            <div className="justify-center  ">
                <h4 className="font-bold text-[30px] pb-2 pt-5 border-b border-white text-center text-regal-blue bg-gradient-to-tr from-blue-light to-sky-blue ">MEN'S CLOTHES</h4>
                    <div className="min-h-screen bg-cool-blue p-4 ">
                        <div className="flex flex-row gap-4 flex-wrap p-20" >
                            {menClothes.map(item => <Cards key={item._id} {...item} />)}
                        </div>
                    </div>
            </div>
           
        </>

    )
}