import axios from 'axios';

const springBootAppUrl = `http://localhost:8080/`;

const addScheduledActivityService = (act) => {
    console.log(`add Scheduled activity`);
    return axios.post(`${springBootAppUrl}scheduled-activity/add-scheduled-activity`, act);
}

const viewScheduledActivityService = () => {
    console.log(`view Scheduled Activity`);
    return axios.get(`${springBootAppUrl}scheduled-activity/view-schedule-activity`);
}

export { addScheduledActivityService, viewScheduledActivityService };