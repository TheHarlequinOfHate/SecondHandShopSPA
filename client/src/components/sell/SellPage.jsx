import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import usePost from "../../hooks/usePost";
import { useActionData, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const sellInfoKeys = {
    name: 'itemName',
    size: 'size',
    brand: 'brand',
    category: 'category',
    phoneNum: 'phoneNum',
    price: 'price',
    description: 'description',
    image: 'image',
    username: 'username',
     
}



export default function SellPage( {username}) {
    let [file,setFile] = useState()
    let [category, setCategory] = useState();

    const context = useContext(AuthContext)
    
    const valueCatHandler = (e) => {
        setCategory(e.target.value);
        values[sellInfoKeys.category] =  category;
        values[sellInfoKeys.username] = username;

    }

    function addImageHandler(e){
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    if(file == undefined){
        setFile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowjKGUP8tcOoGVNrVcuuCpZbN0jsyRwzclg&s")
        sellInfoKeys.image = file
    }
    
    const {values, onChangeHandler, onSubmitHandler} = useForm(usePost,{
        [sellInfoKeys.name]: '',
        [sellInfoKeys.size]: '',
        [sellInfoKeys.brand]: '',
        [sellInfoKeys.category]: '',
        [sellInfoKeys.phoneNum]: '',
        [sellInfoKeys.price]: '',
        [sellInfoKeys.description]: '',
        [sellInfoKeys.image]: '',
        [sellInfoKeys.username]: context.username,
    })

    return (
        <>  
           <div className="flex h-screen bg-cool-blue place-content-center">
                <div className="mt-52 bg-mustard flex h-4/6 w-3/6 rounded-lg ">
                    <form action="" className="flex flex-col m-5 w-full  ">
                        <label htmlFor={sellInfoKeys.name}>Item Name</label>
                        <input
                            type="text"
                            name={sellInfoKeys.name}
                            id="name"
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[sellInfoKeys.name]}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor={sellInfoKeys.size}>Size</label>
                        <input
                            type="text"
                            name={sellInfoKeys.size}
                            id="name"
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[sellInfoKeys.size]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={sellInfoKeys.brand}>Brand</label>
                        <input
                            type="text"
                            name={sellInfoKeys.brand}
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[sellInfoKeys.brand]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={sellInfoKeys.category}>Category</label>
                        <select
                            name={sellInfoKeys.category}
                            id="category"
                            onChange={valueCatHandler}
                            value={values[sellInfoKeys.category] = category}
                        >
                            <option  value="Men">Men</option>
                            <option value='Women'>Women</option>
                        </select>
                        <label htmlFor={sellInfoKeys.phoneNum}>Phone Number</label>
                        <input
                            type="text"
                            name={sellInfoKeys.phoneNum}
                            className="border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[sellInfoKeys.phoneNum]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={sellInfoKeys.price}>Price</label>
                        <input
                            type="text"
                            name={sellInfoKeys.price}
                            id="price" 
                            value={values[sellInfoKeys.price]}
                            onChange={onChangeHandler}

                        />
                        <label htmlFor={sellInfoKeys.description}>Item Discription</label>
                        <textarea
                            name={sellInfoKeys.description}
                            id="description"
                            className="h-full border-2 hover:border-cool-blue mt-1 mb-1"
                            value={values[sellInfoKeys.description]}
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
                                name={sellInfoKeys.image}
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