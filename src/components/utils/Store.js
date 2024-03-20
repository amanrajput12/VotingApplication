
import {configureStore } from "@reduxjs/toolkit"
import VotingPanelSlice from "./VotingPanelSlice"

const Store =  configureStore({
    reducer:{
        vote:VotingPanelSlice
    }
})


export default Store