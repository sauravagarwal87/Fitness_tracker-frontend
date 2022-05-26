import { createSlice } from "@reduxjs/toolkit";
import DailyDiet from "../models/DailyDiet";

const DailyDietSlice = createSlice({

    //  name is only one 
    name: 'diet',

    initialState: {
        dietData: new DailyDiet(),
        dietList: [],
        dailyDietList :[],
        dietListByDate :[],
        dDietList:[]
        // , other objects in state 
    },

    reducers: {

        // getDietById: (state, action) => {
        //     console.log(state);
        //     console.log(action.payload);
        //     state.dietData = action.payload;
        // },
        getAllDiets: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.dietList = action.payload;
        },

        getDailyDiets:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.dailyDietList = action.payload;
        },

        getDietsByDate:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.dietListByDate = action.payload;
        },
        getDDiet:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.dDietList = action.payload;
        }

        // , more methods in reducers   
    }
});

export const { getAllDiets, getDailyDiets, getDietsByDate, getDDiet } = DailyDietSlice.actions;

export default DailyDietSlice.reducer;