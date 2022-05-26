import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;




const updateWActivityService = (date1,date2) => {
    console.log(`Update Weekly Activity`);
    return axios.post(`${springBootAppUrl}weekly-activity/update-weekly-activity?d1=${date1}&d2=${date2}`);
}


const viewWActivityByCatService = (date1,date2) => {
    console.log(`View Weekly Activity by Category`);
    return axios.get(`${springBootAppUrl}weekly-activity/view-weekly-activity-cat?Date=${date1}&d2=${date2}`);
}

const viewWActivityService = (date) => {
    console.log(`View Weekly Activity by Category`);
    return axios.get(`${springBootAppUrl}weekly-activity/view-weekly-activity?Date=${date}`);
}


export { updateWActivityService,viewWActivityByCatService,viewWActivityService};