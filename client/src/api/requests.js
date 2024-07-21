 async function requester  (method, url , data) {
    
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

    let response = await fetch(url, options);
    let result = await response.json();

    return result;
}

export const get = (url,data) => requester.bind(null, "GET", url, data)
export const post = (url,data) => requester.bind(null,"POST", url, data)
export const put = (url,data) => requester.bind(null, "PUT", url, data)
export const del = (url,data) => requester.bind(null, "DELETE", url, data)
