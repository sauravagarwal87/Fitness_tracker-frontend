import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;




const updateWDietService = (date1,date2) => {
    console.log(`Update Weekly Diet`);
    return axios.post(`${springBootAppUrl}weekly-diet/update-weekly-diet?d1=${date1}&d2=${date2}`);
}


const viewWDietByCatService = (date1,date2) => {
    console.log(`View Weekly Diet by Category`);
    return axios.get(`${springBootAppUrl}weekly-diet/view-weekly-diet-foodType?Date=${date1}&d2=${date2}`);
}

const viewWDietService = (date) => {
    console.log(`View Weekly Diet by Category`);
    return axios.get(`${springBootAppUrl}weekly-diet/view-weekly-diet?Date=${date}`);
}


export { updateWDietService,viewWDietByCatService,viewWDietService};