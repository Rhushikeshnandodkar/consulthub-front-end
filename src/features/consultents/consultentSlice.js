import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchConsultents = createAsyncThunk('fetchConsultents', async() =>{
    const response = await fetch("http://consulthub.com:8000/api/consultent/consultent-list")
    return response.json()
})
export const searchConsultent = createAsyncThunk('searchConsultent', async(key) =>{
    const response = await fetch(`http://consulthub.com:8000/api/consultent/search-consultent?search=${key}`)
    return response.json()
})
export const filterConsultents = createAsyncThunk('fetchLanguages', async(language) =>{
    console.log(language)
    const response = await fetch(`http://consulthub.com:8000/api/consultent/filter-consultents?language=${language}`)
    return response.json()
})
export const fetchSingleConsultent = createAsyncThunk('fetchsingleconsultent', async(id) =>{
    const response = await fetch(`http://consulthub.com:8000/api/consultent/consultent-detail/${id}`)
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
        builder.addCase(filterConsultents.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(filterConsultents.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.consultent_data = action.payload
        })
        builder.addCase(filterConsultents.rejected, (state, action) =>{
            state.isLoading = false
            state.iserror = true
        })
        builder.addCase(fetchSingleConsultent.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchSingleConsultent.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.singleconsultent = action.payload
        })
        builder.addCase(fetchSingleConsultent.rejected, (state, action) =>{
            state.isLoading = false
            state.iserror = true
        })
    }
})
export default consultentSlice.reducer