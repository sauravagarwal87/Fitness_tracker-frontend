import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;

const addDietService = (diet) => {
    console.log(`add diet`);
    return axios.post(`${springBootAppUrl}daily-diet/add-diet`, diet);
}

const getAllDietsService = () => {
    console.log(`getDietByIdService`);
    return axios.get(`${springBootAppUrl}daily-diet/view-all-diet`);
}

const updateDietService = (diet) => {
    console.log(`Update Diet`);
    return axios.put(`${springBootAppUrl}daily-diet/update-diet`, diet);
}

const getDailyDietsService = (date) => {
    console.log(`get Daily Diet Service`);
    return axios.get(`${springBootAppUrl}daily-diet/view-daily-diet?Date=${date}`);
}

const removeDailyDietsService = (id) =>{
    console.log('Deleted Diet');
    return axios.delete(`${springBootAppUrl}daily-diet/remove-diet/${id}`);
}


const getDietsByDateService = () => {
    console.log(`getDietsByDateService`);
    return axios.get(`${springBootAppUrl}daily-diet/view-diet-grp-by-date`);
}

export { addDietService, getAllDietsService, updateDietService, getDailyDietsService, removeDailyDietsService, getDietsByDateService};