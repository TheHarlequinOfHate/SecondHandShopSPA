import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import usePost from "../../hooks/usePost";
import { get } from "../../api/requests";


const editKeys = {
    name: 'itemName',
    size: 'size',
    brand: 'brand',
    category: 'category',
    phoneNum: 'phoneNum',
    price: 'price',
    description: 'description',
    image: 'image',
    username: 'username',
    userID: 'userID'

}



export default function Edit () {
    const userUrl ='http://localhost:3030/jsonstore/userItems'

    async function getItemInfo () { 
        const res = await get(userUrl)
        
    }

    getItemInfo()

    const editKeys = {
        name: 'itemName',
        size: 'size',
        brand: 'brand',
        category: 'category',
        phoneNum: 'phoneNum',
        price: 'price',
        description: 'description',
        image: 'image',
        username: 'username',
        userID: 'userID'
    }

    let [file,setFile] = useState()
    let [category, setCategory] = useState();

    const context = useContext(AuthContext)
    
    const valueCatHandler = (e) => {
        setCategory(e.target.value);
        values[editKeys.category] =  category;

    }

    function addImageHandler(e){
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    if(file == undefined){
        setFile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowjKGUP8tcOoGVNrVcuuCpZbN0jsyRwzclg&s")
        editKeys.image = file
    }
    
    const {values, onChangeHandler, onSubmitHandler} = useForm(usePost,{
        [editKeys.name]: '',
        [editKeys.size]: '',
        [editKeys.brand]: '',
        [editKeys.category]: '',
        [editKeys.phoneNum]: '',
        [editKeys.price]: '',
        [editKeys.description]: '',
        [editKeys.image]: '',
        [editKeys.username]: context.username,
        [editKeys.userID]: context.userID,
    })

    return (
        <>  
           <div className="flex h-screen bg-sky-blue place-content-center">
                <div className="mt-52 bg-dark-green flex h-4/6 w-3/6 rounded-lg ">
                    <form action="" className="flex flex-col m-5 w-full  ">
                        <label htmlFor={editKeys.name}>Item Name</label>
                        <input
                            type="text"
                            name={editKeys.name}
                            id="name"
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[editKeys.name]}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor={editKeys.size}>Size</label>
                        <input
                            type="text"
                            name={editKeys.size}
                            id="name"
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[editKeys.size]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={editKeys.brand}>Brand</label>
                        <input
                            type="text"
                            name={editKeys.brand}
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[editKeys.brand]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={editKeys.category}>Category</label>
                        <select
                            name={editKeys.category}
                            id="category"
                            onChange={valueCatHandler}
                            value={values[editKeys.category] = category}
                        >
                            <option  value="Men">Men</option>
                            <option value='Women'>Women</option>
                        </select>
                        <label htmlFor={editKeys.phoneNum}>Phone Number</label>
                        <input
                            type="text"
                            name={editKeys.phoneNum}
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[editKeys.phoneNum]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={editKeys.price}>Price</label>
                        <input
                            type="text"
                            name={editKeys.price}
                            id="price" 
                            value={values[editKeys.price]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={editKeys.description}>Item Discription</label>
                        <textarea
                            name={editKeys.description}
                            id="description"
                            className="h-full border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[editKeys.description]}
                            onChange={onChangeHandler}

                        >
                        </textarea>
                        <div className="flex justify-center">
                            <button
                                className="mt-8 border-2 border-regal-blue w-3/6 h-8 rounded-lg justify-center text-regal-blue active:scale-[.98] active:duration-75 hover:scale-[1.01]"
                                onClick={onSubmitHandler}
                            >
                            Submit
                            </button>
                        </div>
                    </form>
                    <div className="w-6/6 text-center">
                        <form className="mt-20  flex flex-col items-center max-w-96 min-w-96">
                            <img className="p-10  flex h-1/6 w-6/6  aspect-square object-cover border-1 " src={file} />
                            <label htmlFor="file" className="flex border-2 border-regal-blue w-3/6 h-8 rounded-lg justify-center mt-6 text-regal-blue active:scale-[.98] active:duration-75 hover:scale-[1.01]" >Upload Item image</label>
                            <input
                                className="hidden"
                                type="file"
                                name={editKeys.image}
                                id="file"
                                onChange={addImageHandler}
                                accept=".jpg"
                            />
                        </form>
                    </div>
                </div>

           </div>
        </>
    )

}