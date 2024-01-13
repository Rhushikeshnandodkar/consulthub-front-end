import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
export const fetchConsultents = createAsyncThunk('fetchConsultents', async() =>{
    const response = await fetch(`${url}/api/consultent/consultent-list`)
    return response.json()
})
export const searchConsultent = createAsyncThunk('searchConsultent', async(key) =>{
    const response = await fetch(`${url}/api/consultent/search-consultent?search=${key}`)
    return response.json()
})
export const filterConsultents = createAsyncThunk('fetchLanguages', async(language) =>{
    console.log(language)
    const response = await fetch(`${url}/api/consultent/filter-consultents?category=${language}`)
    return response.json()
})
export const fetchSingleConsultent = createAsyncThunk('fetchsingleconsultent', async(id) =>{
    const response = await fetch(`${url}/api/consultent/consultent-detail/${id}`)
    return response.json()
})
export const fetchConsultentCalender = createAsyncThunk('fetchcalender', async(id) =>{
    const response = await fetch(`${url}/api/booking/time-slots/${id}`)
    return response.json()
})
export const fetchConsultentReviews = createAsyncThunk('reviews', async(id, thunkAPI) =>{
    const response = await fetch(`${url}/api/consultent/fetch-reviews/${id}`)
    return response.json()
})
export const reviewAllowance = createAsyncThunk('reviewAllow', async(id, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/consultent/check-reviews?consultent=${id}`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }
        })
        const data = await res.json()
        if(res.status == 200){
            return {...data}
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err.response)
    }
})
export const postReview = createAsyncThunk('postReview', async(data, thunkAPI) =>{
    console.log(data)
    try{
        const res = await fetch(`${url}/api/consultent/post-reviews?consultent=${data.uId}`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            },
            body : JSON.stringify(data)
        })
        const resData = await res.json()
        if(res.status == 200){
            console.log(resData)
            return {...data}
        }
    }catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err.response)
    }
})
const consultentSlice = createSlice({
    name: "consultent",
    initialState : {
        isLoading : false,
        consultent_data : null,
        singleconsultent : null,
        searchResults : null,
        reviews: null,
        isReview : false,
        iserror : false,
        slots: null,
        reviewallowance: null
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
        builder.addCase(fetchConsultentCalender.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchConsultentCalender.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.slots = action.payload
        })
        builder.addCase(fetchConsultentCalender.rejected, (state, action) =>{
            state.isLoading = false
            state.iserror = true
        })
        builder.addCase(fetchConsultentReviews.pending, (state, action) =>{
            state.isReview = false;
        })
        builder.addCase(fetchConsultentReviews.fulfilled, (state, action) =>{
            state.isReview = true;
            state.reviews = action.payload
        })
        builder.addCase(fetchConsultentReviews.rejected, (state, action) =>{
            state.isReview = false
            state.iserror = true
        })
        builder.addCase(reviewAllowance.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(reviewAllowance.fulfilled, (state, action) =>{
            state.reviewallowance = action.payload
            state.isLoading = false
        })
        builder.addCase(reviewAllowance.rejected, (state, action) =>{
            // state.isReview = false
            state.iserror = true
        })
        builder.addCase(postReview.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(postReview.fulfilled, (state, action) =>{
            state.isLoading = false
        })
        builder.addCase(postReview.rejected, (state, action) =>{
            // state.isReview = false
            state.iserror = true
            state.isLoading = false
        })
    }
})
export default consultentSlice.reducer