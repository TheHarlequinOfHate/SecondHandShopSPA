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
            <div className="justify-center ">
                <h4 className="font-bold text-[30px] pb-2 pt-5 border-b border-white text-center bg-smooth-grey text-dark-green">WOMEN CLOTHES</h4>
                    <div className="min-h-screen bg-light-green p-4 ">
                        <div className="flex flex-row gap-4 flex-wrap p-20" >
                            {womenClothes.map(item => <Cards key={item._id} {...item}/>)}
                        </div>
                    </div>
            </div>
           
        </>

    )
}