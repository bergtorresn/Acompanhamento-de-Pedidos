import axios from 'axios';

const baseUrl = "http://localhost:4000/"

function get(apiEndpoint) {
    return axios.get(baseUrl + apiEndpoint).then((response) => {
        return response;
    }).catch((err) => {
        console.log("***** ERRO: " + err);
    })
}

function post(apiEndpoint, payload) {
    return axios.post(baseUrl + apiEndpoint, payload).then((response) => {
        return response;
    }).catch((err) => {
        console.log("***** ERRO: " + err);
    })
}

function put(apiEndpoint, payload) {
    return axios.put(baseUrl + apiEndpoint, payload).then((response) => {
        return response;
    }).catch((err) => {
        console.log("***** ERRO: " + err);
    })
}

function remove(apiEndpoint) {
    return axios.delete(baseUrl + apiEndpoint).then((response) => {
        return response;
    }).catch((err) => {
        console.log("***** ERRO: " + err);
    })
}

export const requests = {
    get,
    post,
    put,
    remove
};