const Fetch = {
    post: (url,params,callback)=>{
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((result) => {
                callback(result)
            })
            .catch((error) => {
                console.log("error = " + error)
            })
    },
    get: (url, callback)=>{
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((result) => {
                callback(result)
            })
            .catch((error) => {
                console.log("error = " + error)
            })
    }
}

export default Fetch;