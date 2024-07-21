import * as request from './requests.js';


const baseUrl = 'http://localhost:3030/jsonstore/menclothes';

export const getMenClothes  = async () => {
    let response = await fetch('http://localhost:3030/jsonstore/menclothes');
    let result = await response.json();

    let clothesInfo = Object.values(result);

    return clothesInfo;
}