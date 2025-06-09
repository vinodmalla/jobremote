import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"data",
    initialState:{
        jobdata:null
    },
    reducers:{
        addjobData:(state,action)=>{
            state.jobdata=action.payload;
        }
    }


})
export const {addjobData}=dataSlice.actions;

export default dataSlice.reducer;