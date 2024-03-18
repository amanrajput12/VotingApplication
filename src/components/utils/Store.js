
import {configureStore } from "@reduxjs/toolkit"
import VotingPanelSlice from "./VotingPanelSlice"

const Store =  configureStore({
    reducer:{
        voting:VotingPanelSlice
    }
})


export default Store