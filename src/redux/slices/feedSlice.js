import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userFeed:null,
    pageNumber:1,
    userNumber:0, 
}

const feedSlice=createSlice({
    name:"userFeed",
    initialState,
    reducers:{
        setFeed:(state,action)=>{
            state.userFeed=action.payload.feed;
            
        },
        setPageNumber:(state)=>{
            state.pageNumber=state.pageNumber+1;
        },
        incrementUserNumber:(state)=>{
            state.userNumber=state.userNumber+1;
        },
        resetUserNumber:(state)=>{
            state.userNumber=0;
        }
        


    }
});

export const {setFeed,setPageNumber,incrementUserNumber,resetUserNumber} =feedSlice.actions;

export default feedSlice.reducer;