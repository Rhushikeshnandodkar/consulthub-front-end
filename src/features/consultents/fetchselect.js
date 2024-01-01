import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
export const fetchLanguages = createAsyncThunk('fetchlanguages', async() =>{
    const response = await fetch(`${url}/api/consultent/languages-list`)
    return response.json()
})
export const fetchCategories = createAsyncThunk('fetchcategories', async() =>{
    const response = await fetch(`${url}/api/consultent/categories-list`)
    return response.json()
})
const fetchSelectSlice = createSlice({
    name:'selects',
    initialState : {
        languages : null,
        category : null,
        loading : false,
        iserror : false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchLanguages.pending, (state, action) =>{
            state.loading = true;
        })
        builder.addCase(fetchLanguages.fulfilled, (state, action) =>{
            state.loading = false;
            state.languages = action.payload
        })
        builder.addCase(fetchLanguages.rejected, (state, action) =>{
            state.loading = false
            state.iserror = true
        })
        builder.addCase(fetchCategories.pending, (state, action) =>{
            state.loading = true;
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) =>{
            state.loading = false;
            state.category = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state, action) =>{
            state.loading = false
            state.iserror = true
        })
    }

})
export default fetchSelectSlice.reducer