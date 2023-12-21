import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSignup = createAsyncThunk("user/singup", async(data, thunAPI) =>{
    console.log(data)
    const config = {
        method : 'post',
        url : "http://consulthub.com:8000/api/auth/register-user",
        headers : {
            'Authorization': '',
            'Content-Type': 'application/json'
        },
        data
    }
    const response = await axios(config)
    localStorage.setItem("userToken", response.data.access)
    console.log(response.data)
    return response.data
})
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
    const {dispatch} = thunkAPI
    dispatch(getUserInfo())
    return response.data
})
export const getUserInfo = createAsyncThunk("user/userinfo", async(_, thunkAPI) =>{
    try{
        const res = await fetch("http://consulthub.com:8000/api/auth/user-info", {
            method: "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }  
        })
        const data = await res.json()
        localStorage.setItem('user', JSON.stringify({...data}))
        console.log("getUser", data)
        if(res.status==200){
            return {...data}
        }else{
            return thunkAPI.rejectWithValue(data)
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
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
    user : JSON.parse(localStorage.getItem("user")),
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
            state.user = localStorage.getItem("user")
            state.isAuthenticated = true;
        })
        .addCase(userLogin.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
            state.isAuthenticated = false;
            state.userToken = null;
        })
        builder.addCase(userSignup.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(userSignup.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.userToken = localStorage.getItem("userToken")
            state.isAuthenticated = true;
        })
        .addCase(userSignup.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
            state.isAuthenticated = false;
            state.userToken = null;
        })
        .addCase(getUserInfo.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(getUserInfo.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuthenticated = true;
        })
        .addCase(getUserInfo.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
    }
})

export default userSlice.reducer