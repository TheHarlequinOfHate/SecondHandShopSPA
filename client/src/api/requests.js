export default async function requester  (method, url , data) {
    
    const options = {}

    if(method !== 'GET'){
        options.method = method;
    }

    if(data){
        options.header = {
            'Content-Type': 'application/json',

        };

        options.body =JSON.stringify(data);
    }

    await fetch(url, options)

    let response = await fetch(url, options);
    let result = response.json();

    return result;
}

export const get = (url,data) => requester.bind("GET", url, data)
export const post = (url,data) => requester.bind("POST", url, data)
export const put = (url,data) => requester.bind("PUT", url, data)
export const del = (url,data) => requester.bind("DELETE", url, data)
