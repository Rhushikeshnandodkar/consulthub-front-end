import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userLogin = createAsyncThunk("user/login", async(data, thunkAPI) =>{
    console.log(data)
    const config = {
        method : 'post',
        url: "http://consulthub.com:8000/api/auth/token/",
        headers : {
            'Authorization': '',
            'Content-Type': 'application/json'
        },
        data
    }
    const response = await axios(config);
    localStorage.setItem("userToken", response.data.access)
    console.log(response.data)
    return response.data
})
export const googleUserLogin = createAsyncThunk("user/googleLogin", async(token) =>{
    console.log(token)
    const res = await axios.post("http://consulthub.com:8000/api/auth/generate-token", {
        id_token : token
    })
    console.log(res)
    return res
})
const initialState = {
    isLoading : true,
    user : null,
    userToken : localStorage.getItem("userToken"),
    isAuthenticated : false,
    success: false,
    error : false
}
const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(userLogin.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(userLogin.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.userToken = localStorage.getItem("userToken")
            state.isAuthenticated = true;
        })
        .addCase(userLogin.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
            state.isAuthenticated = false;
            state.userToken = null;
        })
    }
})

export default userSlice.reducer