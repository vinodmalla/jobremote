    import { configureStore } from "@reduxjs/toolkit";
    import dataReducer from "./dataSlice"
    import discriptionReducer from './descriptionSlice'

    const appstore= configureStore({
        reducer:{
            data:dataReducer,
            discription:discriptionReducer,
        }
    })
    export default appstore;