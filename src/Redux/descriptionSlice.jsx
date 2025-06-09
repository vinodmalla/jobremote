import { createSlice } from "@reduxjs/toolkit";

const descriptionSlice=createSlice({
    name:"description",
    initialState:{
        jobDiscription:null
    },
    reducers:{
        addJobDiscription:(state,action)=>{
            state.jobDiscription=action.payload;
        }
    }
})
export const {addJobDiscription}=descriptionSlice.actions;

export default descriptionSlice.reducer;
