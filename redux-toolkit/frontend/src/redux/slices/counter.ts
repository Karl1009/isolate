import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoint from '../../endpoint'
import axios from 'axios'
import store from "../store";
import { addMessage } from "./globalSnackbar";
// import { addMessage } from "./globalSnackbar";

interface AxiosReturn<T> {
  data: T
  isSuccess: boolean
}
export const fetchHealth = createAsyncThunk(
    'user/fetchHealth',
    async (a: number, thunkAPI) => {
      try {
        const response = await endpoint.get<AxiosReturn<{name: string}>>('/health')
        const { data, isSuccess } = response.data
        console.log(data)
        return data

      } catch (err: any) {
        thunkAPI.dispatch(addMessage(err.message))
        throw err
        // return rejectWithValue(err.message)
      }
    }
  )


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        healthyName: ""
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchHealth.fulfilled, (state, action) => {
          console.log(action)
          state.healthyName = action.payload!.name
        })
        .addCase(fetchHealth.rejected, (state, action) => {
          console.log(action)
          // store.dispatch(addMessage(action.error.message))
        })
      },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer