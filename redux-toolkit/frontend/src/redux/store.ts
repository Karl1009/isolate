import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter"
import globalSnackbarReducer from "./slices/globalSnackbar"
import ThunkDispatch from 'redux-thunk'
import { useDispatch } from "react-redux";


const store = configureStore({
    reducer: { 
        counter: counterReducer,      
        globalSnackbar: globalSnackbarReducer 
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch; 

// const RootStateNoReturn = typeof store.getState
