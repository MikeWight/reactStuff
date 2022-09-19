/*
 * src/store.js
 * No initialState
*/
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reduxstuff/counter';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})