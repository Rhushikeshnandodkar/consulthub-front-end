import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchConsultents = createAsyncThunk('fetchConsultents', async() =>{
    const response = await fetch("http://consulthub.com:8000/api/consultent/consultent-list")
    return response.json()
})
export const searchConsultent = createAsyncThunk('searchConsultent', async(key) =>{
    const response = await fetch(`http://consulthub.com:8000/api/consultent/search-consultent?search=${key}`)
    return response.json()
})
const consultentSlice = createSlice({
    name: "consultent",
    initialState : {
        isLoading : false,
        consultent_data : null,
        singleconsultent : null,
        searchResults : null,
        iserror : false
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchConsultents.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchConsultents.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.consultent_data = action.payload
        })
        builder.addCase(fetchConsultents.rejected, (state, action) =>{
            state.isLoading = false
            state.iserror = true
        })
        builder.addCase(searchConsultent.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(searchConsultent.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.consultent_data = action.payload
        })
        builder.addCase(searchConsultent.rejected, (state, action) =>{
            state.isLoading = false
            state.iserror = true
        })
    }
})
export default consultentSlice.reducer