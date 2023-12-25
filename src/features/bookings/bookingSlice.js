import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import userSlice from "../userAuth/userSlice";

const bookMeeting = createAsyncThunk("booking/bookMeet", async(data, thunkAPI) =>{
    try{
        const res = await fetch("http://consulthub.com:8000/api/booking/book-meet", {
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            },
            data
        })
        console.log(data, res)
        return res.data

    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})
const initialState = {
    isBooked : false,
    error : false
}
const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(bookMeeting.pending, (state, action) =>{
            state.isBooked = false
        })
        .addCase(bookMeeting.fulfilled, (state, {payload}) => {
            state.isBooked = true
        })
        .addCase(bookMeeting.rejected, (state, {payload}) => {
            state.error = true
        })
    }
})
export default bookingSlice.reducer