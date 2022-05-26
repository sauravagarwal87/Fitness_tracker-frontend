import { configureStore } from "@reduxjs/toolkit";
import actReducer from './DailyActivitySlice';
import dietReducer from './DailyDietSlice';
import wActReducer from './WeeklyActivitySlice';
import wDietReducer from './WeeklyDietSlice';
import admReducer from './AdminSlice';
import usrReducer from './UserSlice';
import schReducer from './ScheduledActivitySlice'



console.log('store initialized...');


const store = configureStore(
    
    {
        reducer: {
            act: actReducer,
            diet: dietReducer,
            adm: admReducer,
            usr: usrReducer,
            wAct: wActReducer,
            sact:schReducer,
            
            // , more reducers 
        }
    }
);

export default store;