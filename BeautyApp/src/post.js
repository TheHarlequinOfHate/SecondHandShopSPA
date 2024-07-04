fetch('http://localhost:3030/jsonstore/users', {
    method: 'POST',
    body: JSON.stringify({
        username: `${usernameValue}`,
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then((response) => response.json()).then((json) => console.log(json))