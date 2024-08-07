import { useState,useContext,useEffect } from "react"
import UserItems from "./UserItems";
import { get } from "../../api/requests";
import { AuthContext } from "../../context/AuthContext";

export default function UserAccount() {
    let [file,setFile] = useState()
    const [item,setItem] = useState({});
    const context = useContext(AuthContext)


    const userUrl ='http://localhost:3030/jsonstore/userItems';

    useEffect ( () => {
        async function getItemData () {
            let res = await get(userUrl);
            setItem(res)
        }

        getItemData()
    },[]);

    let result = []
    let arr = Object.values(item)
    let gettingUsersItems = arr.map((item) => item.userID == context.userID ? result.push(item) : null)
    console.log(result)
    function addImageHandler(e){
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    if(file == undefined){
        setFile("https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png")
    }
    

    return (
        <>
        <div className="flex h-screen flex-row ">
            <div className="h-full flex  bg-regal-blue h-full w-3/12 justify-center">
                <form className="flex flex-col items-center">
                    <img className="m-5 p-2 flex h-2/6  rounded-full aspect-square object-cover border-1 " src={file} />
                    <label htmlFor="file" className="flex border-2 border-mustard w-3/6 h-8 rounded-lg justify-center mt-6 text-mustard" >Upload your image</label>
                    <input  className="hidden"type="file" name="file" id="file" onChange={addImageHandler} accept=".jpg"/>
                </form>
            </div>
            <div className="flex flex-col w-screen">
                <h2 className=" flex font-bold h-20 items-center font-serif shadow bg-stone-100 text-mustard mb-4 justify-center text-2xl">WELCOME BACK!</h2>
                <h1 className="flex font-bold justify-center mt-16 text-3xl font-mono text-regal-blue ">Items that you sell</h1>
                {result.map(item => <UserItems key={item._id} {...item}/>)}                   
            </div>
        </div>
        </>
    )
}