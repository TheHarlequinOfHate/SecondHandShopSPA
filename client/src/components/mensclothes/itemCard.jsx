import { Link, useNavigate } from "react-router-dom";
import { get } from "../../api/requests";
import { AuthContext } from "../../context/AuthContext";
export default function Cards({
    username,
    name,
    image,
    price,
    category,
    color,
    size,
    description,
    _id,
}){
  const navigate = useNavigate()
  const detailsHandler = async (e) => {
    navigate(`${_id}`);
    if(category == 'Men'){
      getMenData(_id);
      navigate(`/menclothes/${_id}`);

    } else {
      await getWomenData(_id);
      navigate(`/womenclothes/${_id}`);

    }
    
  }


  return (
    <div className="bg-white text-gray-700 w-30  shadow-lg rounded-md overflow-hidden">
      <img src={image} className="w-80 h-50"></img>
      <div className="p-5 flex flex-col gap-3 ">
        <div className="flex items-center gap-2 ">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-center">{username}</span>
        </div>

        <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          {name}
        </h2>

        <div>
          <span className="text-xl font-bold">{price} lv</span>
        </div>
      </div>
      <div className="mt-5 flex gap-2  pb-3 justify-center">
       <button onClick={detailsHandler} className=" bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider tansition">
          View
        </button>
      </div>
    </div>
  );
}
export async function getMenData(_id) {
  let url = `http://localhost:3030/jsonstore/menclothes/`

  const res = await get(`${url}${_id}`);
  return res
}

export async function getWomenData(_id) {
  let url = `http://localhost:3030/jsonstore/womenclothes/`

  const res = await get(`${url}${_id}`);
  return res
}