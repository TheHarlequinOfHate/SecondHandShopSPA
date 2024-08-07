import { useNavigate } from "react-router-dom"
import { get } from "../../api/requests"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/AuthContext";


export default function UserItems (
    image,
) { 
    const navigate = useNavigate()

    const onEditHandler = () => {
        navigate('/edit')

    }

    return (
        <>
            <div className="flex border-2 border-white rounded-lg shadow-lg h-1/6 w-5/6 ml-28 bg-dark-green">
                <img className="w-1/6 h-full p-2" src={image} alt="" />
                <div className="flex w-full justify-end space-x-6 items-center mr-5">
                    <button className="flex border-2 border-mustard w-20 justify-center rounded-lg shadow-lg text-mustard bg-regal-blue">Preview</button>
                    <button className="flex border-2 border-mustard w-20 justify-center rounded-lg shadow-lg text-mustard bg-regal-blue" onClick={onEditHandler}>Edit</button>
                </div>
            </div>
        </>
    )
}