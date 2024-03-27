
import {configureStore } from "@reduxjs/toolkit"
import VotingPanelSlice from "./VotingPanelSlice"
import UserSlice from "./UserSlice"

const Store =  configureStore({
    reducer:{
        vote:VotingPanelSlice,
        user:UserSlice
    }
})


export default Store