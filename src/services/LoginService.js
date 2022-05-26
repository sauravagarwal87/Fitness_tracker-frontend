import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;

const loginService = (email,password) => {
    console.log(email+password);
    return axios.post(`${springBootAppUrl}user/login?Email=${email}&Password=${password}`);
}

export { loginService };