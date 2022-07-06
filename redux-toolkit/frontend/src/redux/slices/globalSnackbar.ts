import { createSlice } from "@reduxjs/toolkit"
import store from "../store";

export const globalSnackbarSlice = createSlice({
    name: "globalSnackbar",
    initialState: {
        message: ""
    },
    reducers: {
        addMessage: (state, action) => {
            console.log(action)
          state.message = action.payload
        }
    },
    
  })

  export const { addMessage } = globalSnackbarSlice.actions

  export default globalSnackbarSlice.reducer
