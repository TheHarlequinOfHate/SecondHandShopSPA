import { post } from "../api/requests";

let baseUrl = 'http://localhost:3030/jsonstore/menclothes';
const userURL = 'http://localhost:3030/jsonstore/userItems';
export default  function usePost (data) {
    let toArrData = Object.values(data)

    if(toArrData.includes('Women')){
        baseUrl = "http://localhost:3030/jsonstore/womenclothes"
    }else {
        baseUrl = 'http://localhost:3030/jsonstore/menclothes'
    }

    const userItem = async() => {
        const result = await post(userURL,data)
        return result
    }
    userItem()

    const postHandler = async () => {
        const result =  await post(baseUrl,data)
        return result

    }

    postHandler(data)


}


