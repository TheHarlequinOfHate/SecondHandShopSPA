import { useState } from "react";

export default function SellPage() {
    let [file,setFile] = useState()

    function addImageHandler(e){
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    if(file == undefined){
        setFile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowjKGUP8tcOoGVNrVcuuCpZbN0jsyRwzclg&s")
    }
    



    return (
        <>
           <div className="flex h-screen bg-cool-blue place-content-center">
                <div className="mt-52 bg-mustard flex h-4/6 w-3/6 rounded-lg ">
                    <form action="" className="flex flex-col m-5 w-full  ">
                        <label htmlFor="">Item Name</label>
                        <input type="text" name="" id="" className="border-2 hover:border-cool-blue mt-1 mb-1"/>
                        <label htmlFor="">Size</label>
                        <input type="text" className="border-2 hover:border-cool-blue mt-1 mb-1"/>
                        <label htmlFor="">Brand</label>
                        <input type="text" className="border-2 hover:border-cool-blue mt-1 mb-1"/>
                        <label htmlFor="">Category</label>
                        <select name="" id="">
                            <option value="">Men</option>
                            <option value="">Women</option>
                        </select>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" className="border-2 hover:border-cool-blue mt-1 mb-1"/>
                        <label htmlFor="">Price</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Item Discription</label>
                        <textarea name="" id="" className="h-full border-2 hover:border-cool-blue mt-1 mb-1"></textarea>
                        <div className="flex justify-center">
                            <button className="mt-8 border-2 border-regal-blue w-3/6 h-8 rounded-lg justify-center text-regal-blue active:scale-[.98] active:duration-75 hover:scale-[1.01]">Submit</button>
                        </div>
                    </form>
                    <div className="w-6/6 text-center">
                        <form className="mt-20  flex flex-col items-center max-w-96 min-w-96">
                            <img className="p-10  flex h-1/6 w-6/6  aspect-square object-cover border-1 " src={file} />
                            <label htmlFor="file" className="flex border-2 border-regal-blue w-3/6 h-8 rounded-lg justify-center mt-6 text-regal-blue active:scale-[.98] active:duration-75 hover:scale-[1.01]" >Upload Item image</label>
                            <input  className="hidden"type="file" name="file" id="file" onChange={addImageHandler} accept=".jpg"/>
                        </form>
                    </div>
                </div>

           </div>
        </>
    )
}