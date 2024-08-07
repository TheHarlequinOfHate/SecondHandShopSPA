const baseUrl = 'http://localhost:3030/jsonstore/womenclothes';

export const getWomenClothes  = async () => {
    let response = await fetch(baseUrl);
    let result = await response.json();
    let clothesInfo = Object.values(result);

    return clothesInfo;
}