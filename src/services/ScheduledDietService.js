import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;

const addScheduledDietService = (diet) => {
    console.log(`add diet`);
    console.log(diet);
    return axios.put(`${springBootAppUrl}sd/update-diet`, diet);
}

const getScheduledDietsService = () => {
    console.log(`getDietByIdService`);
    return axios.get(`${springBootAppUrl}sd/view-diet`);
}

const removeScheduledDietsService = (id) =>{
    console.log('Deleted Diet');
    return axios.delete(`${springBootAppUrl}sd/remove-diet/${id}`);
}
export { addScheduledDietService , getScheduledDietsService ,removeScheduledDietsService};