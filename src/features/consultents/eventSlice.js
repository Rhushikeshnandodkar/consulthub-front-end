import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";

export const fetchEventData = createAsyncThunk('fetchEventData', async() =>{
    const response = await fetch(`${url}/api/consultent/upcomming-event`)
    return response.json()
})
const eventSlice = createSlice({
    name : "event",
    initialState : {
        eventLoading : false,
        eventData : null,
        eventError : null
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchEventData.pending, (state, action) =>{
            state.eventLoading = true;
        })
        builder.addCase(fetchEventData.fulfilled, (state, action) =>{
            state.eventLoading = false
            state.eventData = action.payload
        })
        builder.addCase(fetchEventData.rejected, (state, action) =>{
            state.eventLoading = false
            state.eventError = action.payload
        })
    }
})
export default eventSlice.reducer