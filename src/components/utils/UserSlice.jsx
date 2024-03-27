import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name:"UserDetail",
  initialState:{
    email:"",
    userName:"",
    verified:""
  }   ,
  reducers:{
     addUser:(state,action)=>{
        state.email = action.payload.email,
        state.userName= action.payload.userName
        state.verified= action.payload.verified
     }
  }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer