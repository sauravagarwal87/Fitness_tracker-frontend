import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;

const addAdminsService = (act) => {
    console.log(`add admins`);
    return axios.post(`${springBootAppUrl}admin/register`, act);
}
const loginService = (userName,password) => {
    console.log(userName+password);
    return axios.post(`${springBootAppUrl}admin/login?Username=${userName}&Password=${password}`);
}

const getAllAdminsService = () => {
    console.log(`getAdmins`);
    return axios.get(`${springBootAppUrl}admin/get-all-admins`);
}
const getAllUserService = () => {
    console.log(`getAdmins`);
    return axios.get(`${springBootAppUrl}admin/get-all-Users`);
}
const removeUserService = (email) =>{
    console.log('Remove User');
    return axios.delete(`${springBootAppUrl}admin/unregisterUser/${email}`);
}
const removeAdminService = (userName) =>{
    console.log('Remove Admin');
    return axios.delete(`${springBootAppUrl}admin/delete/${userName}`);
}

export { addAdminsService,loginService,getAllAdminsService,getAllUserService,removeUserService,removeAdminService};

