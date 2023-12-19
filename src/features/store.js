import { configureStore } from "@reduxjs/toolkit";
import consultentReducer from "./consultents/consultentSlice"
import selectReducer from "./consultents/fetchselect"
import userReducer from "./userAuth/userSlice"
const store = configureStore({
    reducer:{
        consultent: consultentReducer,
        selects : selectReducer,
        user : userReducer
    }
})
export default store