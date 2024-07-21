import { useEffect, useState } from "react";
import Cards from "./itemCard";
import * as  menAPI  from "../../api/menclothesAPI";

export default function MenClothes(){
    let [menClothes, setMenClothes] = useState([])

    useEffect(() =>  {
        (async () => {
            menAPI.getMenClothes().then(result => setMenClothes(result))
            
        })()
    }, [])

    return(
        <>
            <div className="justify-center bg-gradient-to-tr from-violet-200 to-pink-100 ">
                <h4 className="font-bold text-[30px] pb-2 pt-5 border-b border-violet-200 text-center bg-gradient-to-tr from-violet-200 to-pink-100 ">Men's Clothes</h4>
                    <div className="min-h-screen bg-gradient-to-tr from-violet-100 to-pink-50 p-4 ">
                        <div className="flex flex-row gap-4 flex-wrap p-20" >
                            {menClothes.map(item => <Cards key={item._id} {...item}/>)}
                            
                        </div>
                    </div>
            </div>
           
        </>

    )
}