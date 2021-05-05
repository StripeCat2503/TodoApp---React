import axios from "axios";

export const sendRequest = (options, params, body) =>{
    const baseUrl = process.env.REACT_APP_API_URL;
    console.log(baseUrl)
    if(options.method === 'GET'){
        return axios.get(`${baseUrl}/${options.url}`, {
            params: params
        });
    }
    else if(options.method === 'POST'){
        return axios.post(`${baseUrl}/${options.url}`, body);
    }
    else if(options.method === 'PUT'){
        return axios.put(`${baseUrl}/${options.url}`, body);
    }
    else if(options.method === 'PATCH'){
        return axios.patch(`${baseUrl}/${options.url}`, body);
    }
    else if(options.method === 'DELETE'){
        return axios.delete(`${baseUrl}/${options.url}`, {
            params: params
        });
    }
    else{
        console.log('Unsupported HTTP method');
        return new Promise((resolve, reject) => reject(Error('Unsupported HTTP method')));
    }
}
