import { useNavigate, useParams } from "react-router-dom"
import { del, get } from "../../api/requests"
import { useEffect } from "react"


export default function UserItems (
     items,
    
) { 
    const navigate = useNavigate()
    const onEditHandler = () => {
        navigate(`/edit/${items._id}`);

    }

    let testUrl = `http://localhost:3030/jsonstore/menclothes/${items._id}`
    let secTestUrl = `http://localhost:3030/jsonstore/userItems/${items._id}`
    const deleteHandler = async () => {
        await del(secTestUrl)
        await del(testUrl)
    } 

      


    return (
        <>
            <div className="flex border-2 border-white rounded-lg shadow-lg h-1/6 w-5/6 ml-28 bg-dark-green">
                <h1 className="w-1/6 h-full p-2 font-bold text-center mt-14">{items.itemName}</h1>
                <div className="flex w-full justify-end space-x-6 items-center mr-5">
                    <button className="flex border-2 border-mustard w-20 justify-center rounded-lg shadow-lg text-mustard bg-regal-blue" onClick={deleteHandler}>Delete</button>
                    <button className="flex border-2 border-mustard w-20 justify-center rounded-lg shadow-lg text-mustard bg-regal-blue" onClick={onEditHandler}>Edit</button>
                </div>
            </div>
        </>
    )
}