import { configureStore } from "@reduxjs/toolkit";
import consultentReducer from "./consultents/consultentSlice"
const store = configureStore({
    reducer:{
        consultent: consultentReducer
    }
})
export default store