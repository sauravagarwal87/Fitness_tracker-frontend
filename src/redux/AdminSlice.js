import { createSlice } from "@reduxjs/toolkit";
import Admin  from "../models/Admin";

const AdminSlice = createSlice({

    name: 'adm',
    initialState:{
        admData: new Admin(),
        admList :[]
    },

    reducers:{
        getAllAdmins:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.admList = action.payload;
        }
    }


});

export const {getAllAdmins}= AdminSlice.actions;

export default AdminSlice.reducer;
