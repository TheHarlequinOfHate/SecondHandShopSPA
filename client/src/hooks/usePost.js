import { post } from "../api/requests";
import postItemValidation from "../utils/postItemValidation";

let baseUrl = 'http://localhost:3030/jsonstore/menclothes';
const userURL = 'http://localhost:3030/jsonstore/userItems';
export default  function usePost (data) {
    let toArrData = Object.values(data)
    let isDataValid = postItemValidation(data)

    if(!isDataValid){
        data.isValid = true
        return;
    }

    if(toArrData.includes('Women')){
        baseUrl = "http://localhost:3030/jsonstore/womenclothes";
    }else {
        baseUrl = 'http://localhost:3030/jsonstore/menclothes';
    }

    const userItem = async() => {
        const result = await post(userURL,data);
        return result;
    }
    userItem(data)
    const postHandler = async () => {
        const result =  await post(baseUrl,data);
        return result;

    }

    postHandler(data);


}


