import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;

const addActService = (act) => {
    console.log(`add activity`);
    return axios.post(`${springBootAppUrl}daily-activity/add-activity`, act);
}

const getAllActsService = () => {
    console.log(`getActByIdService`);
    return axios.get(`${springBootAppUrl}daily-activity/view-all-activity`);
}


const updateActivityService = (act) => {
    console.log(`Update Activity`);
    return axios.put(`${springBootAppUrl}daily-activity/update-activity`, act);
}

const getDailyActsService = (date) => {
    console.log(`get Daily Act Service`);
    return axios.get(`${springBootAppUrl}daily-activity/view-daily-activity?Date=${date}`);
}

const removeDailyActsService = (id) =>{
    console.log('Deleted Activity');
    return axios.delete(`${springBootAppUrl}daily-activity/remove-activity?aid=${id}`);
}

const getActsByDateService = () => {
    console.log(`getActsByDateService`);
    return axios.get(`${springBootAppUrl}daily-activity/view-activity-grp-by-date`);
}

export { addActService,getDailyActsService,getAllActsService,updateActivityService, removeDailyActsService,getActsByDateService};
