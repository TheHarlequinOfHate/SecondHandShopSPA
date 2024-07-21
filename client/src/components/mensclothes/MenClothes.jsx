import { useEffect, useState } from "react";
import Cards from "./itemCard";
import requester, { get } from "../../api/requests";

const baseURL = 'http://localhost:3030/jsonstore/menclothes';

export default function MenClothes(){
    const [clothe, setClothe] = useState([]);

    useEffect( ()=> {
        (async () => {
            const clothResult = await get(baseURL);
            setClothe(clothResult)

        })()
    }),[];

    console.log(clothe)
    return(
        <>
            <div className="justify-center bg-gradient-to-tr from-violet-200 to-pink-100 ">
                <h4 className="font-bold text-[30px] pb-2 pt-5 border-b border-violet-200 text-center bg-gradient-to-tr from-violet-200 to-pink-100 ">Men's Clothes</h4>
                    <div className="min-h-screen bg-gradient-to-tr from-violet-100 to-pink-50 p-4 ">
                        <div className="flex flex-row gap-4 flex-wrap p-20" >
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </div>
                       

                    </div>
            </div>
           
        </>

    )
}