import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import endpoint from "../../endpoint";


interface AxiosReturn<T> {
  data: T
  isSuccess: boolean
}
export const fetchHealth = createAsyncThunk('user/fetchHealth', async (a: number, thunkAPI) => {
  try {
    const response = await endpoint.get<AxiosReturn<{name: string}>>('/health')
    const { data, isSuccess } = response.data
    
    thunkAPI.dispatch(addMessage(data))
  } catch (err: any) {
    thunkAPI.dispatch(setErrorMessage(err.message))
  }
}
)


export const globalSnackbarSlice = createSlice({
    name: "globalSnackbar",
    initialState: {
        message: ""
    },
    reducers: {
        addMessage: (state, action) => {
          console.log(action.type)
          state.message = action.payload
        },
        setErrorMessage: (state, action: PayloadAction<string>) => {
          console.log(action.type)
          state.message = action.payload
        }
    },

    // extraReducers: (builder) => {
    //   builder
    //   .addCase(fetchHealth.fulfilled, (state, action) => {
    //     state.message = action.payload!.name
    //   })
    //   .addCase(fetchHealth.rejected, (state, action) => {
    //     // console.log(action)
    //     // store.dispatch(addMessage(action.error.message))
    //   })
    // },
    
  })

  export const { addMessage, setErrorMessage } = globalSnackbarSlice.actions

  export default globalSnackbarSlice.reducer
