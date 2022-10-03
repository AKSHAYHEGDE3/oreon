import { configureStore } from "@reduxjs/toolkit";
import user from './reducers/auth'
import question from "./reducers/question";

export default configureStore({
    reducer:{
        auth:user,
        question:question,
    }
});