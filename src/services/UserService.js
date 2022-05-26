import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;

const addUserService = (act) => {
    console.log(`add User`);
    return axios.post(`${springBootAppUrl}user/register`, act);
}

const updateUser = (act) => {
    console.log(`Update User`);
    return axios.put(`${springBootAppUrl}user/update-user`, act);
}

export {addUserService,updateUser};