import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";

export const fetchEventData = createAsyncThunk('fetchEventData', async() =>{
    const response = await fetch(`${url}/api/consultent/upcomming-event`)
    console.log(response)
    return response.json()
})
export const fetchCommunity = createAsyncThunk('fetchCommunity', async() =>{
    const response = await fetch(`${url}/api/consultent/community`)
    return response.json()
})
const eventSlice = createSlice({
    name : "event",
    initialState : {
        eventLoading : false,
        eventData : null,
        eventError : null,
        communityLoading : false,
        communityData : null,
        communityError : null

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
        builder.addCase(fetchCommunity.pending, (state, action) =>{
            state.communityLoading = true;
        })
        builder.addCase(fetchCommunity.fulfilled, (state, action) =>{
            state.communityData = action.payload
        })
        builder.addCase(fetchCommunity.rejected, (state, action) =>{
            state.communityLoading = false
            state.communityError = action.payload
        })
    }
})
export default eventSlice.reducer