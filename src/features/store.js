import { configureStore } from "@reduxjs/toolkit";
import consultentReducer from "./consultents/consultentSlice"
import selectReducer from "./consultents/fetchselect"
import userReducer from "./userAuth/userSlice"
import bookingReducer from "./bookings/bookingSlice"
import eventReducer from "./consultents/eventSlice"
const store = configureStore({
    reducer:{
        consultent: consultentReducer,
        selects : selectReducer,
        user : userReducer,
        booking : bookingReducer,
        events : eventReducer
    }
})
export default store