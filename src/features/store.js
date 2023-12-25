import { configureStore } from "@reduxjs/toolkit";
import consultentReducer from "./consultents/consultentSlice"
import selectReducer from "./consultents/fetchselect"
import userReducer from "./userAuth/userSlice"
import bookingReducer from "./bookings/bookingSlice"
const store = configureStore({
    reducer:{
        consultent: consultentReducer,
        selects : selectReducer,
        user : userReducer,
        booking : bookingReducer
    }
})
export default store