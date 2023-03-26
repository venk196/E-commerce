const DOMAIN_URL = "http://localhost:8000/api"
const headers = {
    "Content-type": "application/json"
}

const fetchApi = async (endpoint, method, data) => {
    let options = {
        method: method,
        body: JSON.stringify(data),
        headers: headers
    }

    const response = await fetch (DOMAIN_URL + endpoint, options) 
    return response.json()

}

export default fetchApi