import { createSlice } from "@reduxjs/toolkit";



const VotingPanelSlice = createSlice({
    name:"votingPanel",
    initialState:{
        Voting:[]
    },
    reducers:{
        addVoting:(state,action)=>{
            Voting.push(action.payload)
        }
    }
})
 export const {addVoting}=  VotingPanelSlice.actions
  
export default VotingPanelSlice.reducer