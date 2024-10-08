import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import userSlice from "../userAuth/userSlice";
import axios from "axios";
import { url } from "../../components/common/api";

export const bookMeeting = createAsyncThunk("booking/bookMeet", async(data, thunkAPI) =>{
    console.log(data)
    try{
        const config = {
            method : 'post',
            url : `${url}/api/booking/book-meet`,
            headers : {
                'Authorization': `Bearer ${localStorage.getItem("userToken")}`,
                'Content-Type': 'application/json'
            },
            data
        }
        const response = await axios(config)
        console.log(response)
        return response.data
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})
const initialState = {
    isBooked : false,
    error : false,
    status: null
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
            state.status = 200
        })
        .addCase(bookMeeting.rejected, (state, {payload}) => {
            state.error = true
            state.status = 401
        })
    }
})
export default bookingSlice.reducer