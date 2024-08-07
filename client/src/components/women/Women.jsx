import { useEffect, useState } from "react";
import * as  womenAPI  from "../../api/womenApi";
import { Link } from "react-router-dom";
import Cards from "../mensclothes/itemCard";

export default function WomenCloth(){
    let [womenClothes, setWomenClothes] = useState([])

    useEffect(() =>  {
        (async () => {
            womenAPI.getWomenClothes().then(result => setWomenClothes(result))
            
        })()
    }, [])

    return(
        <>
            <div className="justify-center bg-gradient-to-tr from-violet-200 to-pink-100 ">
                <h4 className="font-bold text-[30px] pb-2 pt-5 border-b border-violet-200 text-center bg-gradient-to-tr from-violet-200 to-pink-100 ">Women Clothes</h4>
                    <div className="min-h-screen bg-gradient-to-tr from-violet-100 to-pink-50 p-4 ">
                        <div className="flex flex-row gap-4 flex-wrap p-20" >
                            {womenClothes.map(item => <Cards key={item._id} {...item}/>)}
                        </div>
                    </div>
            </div>
           
        </>

    )
}