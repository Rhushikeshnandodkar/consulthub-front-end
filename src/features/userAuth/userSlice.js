import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../components/common/api";
export const userSignup = createAsyncThunk("user/singup", async(data, thunkAPI) =>{
    console.log(data)
    const config = {
        method : 'post',
        url : `${url}/api/auth/register-user`,
        headers : {
            'Authorization': '',
            'Content-Type': 'application/json'
        },
        data
    }
    const response = await axios(config)
    localStorage.setItem("userToken", response.data.access)
    localStorage.setItem("refreshToken", response.data.refresh)
    const {dispatch} = thunkAPI
    dispatch(getUserInfo())
    console.log(response.data)
    return response.data
})
export const userLogin = createAsyncThunk("user/login", async(data, thunkAPI) =>{
    try{
        const config = {
            method : 'post',
            url: `${url}/api/auth/token/`,
            headers : {
                'Authorization': '',
                'Content-Type': 'application/json'
            },
            data
        }
        const response = await axios(config);
        console.log(response)
        localStorage.setItem("userToken", response.data.access)
        localStorage.setItem("refreshToken", response.data.refresh)
        const {dispatch} = thunkAPI
        dispatch(getUserInfo())
        return response.data
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.status)
    }
})
export const googleUserLogin = createAsyncThunk("user/googleLogin", async(token, thunkAPI) =>{
    console.log(token)
    try{
        const res = await axios.post(`${url}/api/auth/google-login`, {
            access_token : token
        })
        localStorage.setItem("userToken", res.data.access)
        localStorage.setItem("refreshToken", res.data.refresh)
        const {dispatch} = thunkAPI
        dispatch(getUserInfo())
        return res.data
    }catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.status)
    }
})
export const googleUserSignup = createAsyncThunk("user/googleSignup", async(token, thunkAPI) =>{
    console.log(token)
    try{
        const res = await axios.post(`${url}/api/auth/google-signup`, {
            access_token : token
        })
        localStorage.setItem("userToken", res.data.access)
        localStorage.setItem("refreshToken", res.data.refresh)
        const {dispatch} = thunkAPI
        dispatch(getUserInfo())
        return res.data
    }catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err.response.status)
    }
})
export const getUserInfo = createAsyncThunk("user/userinfo", async(_, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/auth/user-info`, {
            method: "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }
        })
        const data = await res.json()
        localStorage.setItem('user', JSON.stringify({...data}))
        if(res.status==200){
            return {...data}
        }else{
            return thunkAPI.rejectWithValue(data)
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.status)
    }
})
export const checkAuth = createAsyncThunk("user/verifyToken", async(_, thunkAPI) =>{
    const access = localStorage.getItem("userToken")
    if(!access) return thunkAPI.rejectWithValue("No Token")
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        token: access,
    })
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
    try {
        const res = await fetch(
        `${url}/api/auth/token/verify/`,
          requestOptions
        );
        const data = await res.json();
  
        if (res.status === 200) {
          const { dispatch } = thunkAPI;
  
          dispatch(getUserInfo());
          // localStorage.getItem("userToken", access);
          return data;
        } else {
          localStorage.removeItem("userToken");
          localStorage.removeItem("user")
          localStorage.removeItem("refreshToken");
          return thunkAPI.rejectWithValue(data);
        }
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
      }
})
export const getInterests = createAsyncThunk("user/getinterests", async(key) => {
    const response = await fetch(`${url}/api/auth/get-interests?search=${key}`)
    return response.json()
})
export const createProfile = createAsyncThunk('user/createprofile', async(data, thunkAPI) =>{

    try{
        const res = await fetch(`${url}/api/auth/user-info`, {
            method: "PATCH",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }  ,
            body: JSON.stringify(data)
        })
        if(res.status == 200){
            const response = await res.json()
            return response
        }else{
            return thunkAPI.rejectWithValue(res.json())
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})
export const getUserBookings = createAsyncThunk('user/getUserBookings', async(thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/booking/user-booking`, {
            method: "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }
        })
        const data = await res.json()
        if(res.status==200){
            return data
        }else{
            return thunkAPI.rejectWithValue(data)
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.status)
    }
})
const initialState = {
    isLoading : true,
    user : JSON.parse(localStorage.getItem("user")),
    userToken : localStorage.getItem("userToken"),
    isAuthenticated : false,
    success: false,
    error : false,
    status : null,
    interests : null,
    bookings : null, 
    userProfile : null
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
            state.status = 200
            state.isAuthenticated = true;
        })
        .addCase(userLogin.rejected, (state, {payload}) => {
            state.isLoading = false
            // state.error = payload
            state.status = payload
            state.isAuthenticated = false;
            state.userToken = null;
        })
        builder.addCase(googleUserLogin.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(googleUserLogin.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.userToken = localStorage.getItem("userToken")
            state.user = localStorage.getItem("user")
            state.status = 200
            state.isAuthenticated = true;
        })
        .addCase(googleUserLogin.rejected, (state, {payload}) => {
            state.isLoading = false
            // state.error = payload
            state.status = payload
            state.isAuthenticated = false;
            state.userToken = null;
        })
        builder.addCase(googleUserSignup.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(googleUserSignup.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.userToken = localStorage.getItem("userToken")
            state.user = localStorage.getItem("user")
            state.status = 200
            state.isAuthenticated = true;
        })
        .addCase(googleUserSignup.rejected, (state, {payload}) => {
            state.isLoading = false
            // state.error = payload
            state.status = payload
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
            localStorage.removeItem("userToken")
            localStorage.removeItem("refreshToken")
        })
        .addCase(getUserBookings.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(getUserBookings.fulfilled, (state, action) => {
            state.isLoading = false
            state.bookings = action.payload
            state.isAuthenticated = true;
        })
        .addCase(getUserBookings.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
            localStorage.removeItem("userToken")
            localStorage.removeItem("refreshToken")
        })
        .addCase(checkAuth.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(checkAuth.fulfilled, (state) => {
            state.isLoading = false;
            state.isAuthenticated = true;
        })
        .addCase(checkAuth.rejected, (state, action) => {
            state.isLoading = false;
            // state.loading = false;
            state = action.payload;
        })
        .addCase(getInterests.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getInterests.fulfilled, (state, action) => {
            state.isLoading = false;
            state.interests = action.payload
        })
        .addCase(getInterests.rejected, (state, action) => {
            state.isLoading = false;
            // state.loading = false;
            state = action.payload;
        })
        .addCase(createProfile.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = 200
            console.log(action.payload)
            state.userProfile = action.payload
        })
        .addCase(createProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.status = 409;
            state = action.payload;
        });
    }
})

export default userSlice.reducer