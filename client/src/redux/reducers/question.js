import {createSlice} from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name : "question",
    initialState:{
        currentQuestion : 1,
        Q1:{
            saved:false,
            data:null
        },
        Q2:{
            saved:false,
            data:null
        },
        Q3:{
            saved:false,
            data:null
        },
        Q4:{
            saved:false,
            data:null
        },
        Q5:{
            saved:false,
            data:null
        },
    },
    reducers:{
        setQuestion:(state,action)=>{
            state.currentQuestion = action.payload;
        },
        saveQ1:(state,action)=>{
            state.Q1.saved = action.payload.save;
            state.Q1.data = action.payload.data;
        },
        saveQ2:(state,action)=>{
            state.Q2.saved = action.payload.save;
            state.Q2.data = action.payload.data;
        },
        saveQ3:(state,action)=>{
            state.Q3.saved = action.payload.save;
            state.Q3.data = action.payload.data;
        },
        saveQ4:(state,action)=>{
            state.Q4.saved = action.payload.save;
            state.Q4.data = action.payload.data;
        },
        saveQ5:(state,action)=>{
            state.Q5.saved = action.payload.save;
            state.Q5.data = action.payload.data;
        },

    }
})

export const {setQuestion,saveQ1,saveQ2,saveQ3,saveQ4,saveQ5} = questionSlice.actions;
export default questionSlice.reducer;