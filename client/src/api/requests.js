 async function requester  (method, url , data, token) {
    
    const options = {}

    if(method !== 'GET'){
        options.method = method;
    }

    if(method == 'PATCH'){
        options.method = method;

    }

    if(data){
        options.header = {
            'Content-Type': 'application/json',

        };

        options.body =JSON.stringify(data);
    }

    if(method == 'PUT'){
        options.header = {
            'Content-Type': 'application/json',
            "X-Authorization": {token},
        };

        options.body =JSON.stringify(data);
    }


    let response = await fetch(url, options);
    let result = await response.json();

    return result;
}

export const get = requester.bind(null, "GET")
export const post = requester.bind(null,"POST")
export const put = requester.bind(null, "PUT")
export const del = requester.bind(null, "DELETE")
export const patch = requester.bind(null,'PATCH')
