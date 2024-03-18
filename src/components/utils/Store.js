
import {configureStore } from "@reduxjs/toolkit"
import VotingPannel from "../Admin/VotingPannel"

const Store =  configureStore({
    reducer:{
        voting:VotingPannel
    }
})


export default Store