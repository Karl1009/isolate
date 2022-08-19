import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoint from '../../endpoint'
import { addMessage } from "./globalSnackbar";
// import { addMessage } from "./globalSnackbar";

interface AxiosReturn<T> {
  data: T
  isSuccess: boolean
}
// export const fetchHealth = createAsyncThunk('user/fetchHealth', async (a: number, thunkAPI) => {
//       try {
//         const response = await endpoint.get<AxiosReturn<{name: string}>>('/health')
//         const { data, isSuccess } = response.data
//         thunkAPI.dispatch(addMessage(data))
//         // return data
//       } catch (err: any) {
//         // thunkAPI.dispatch(addMessage(err.message))
//         throw err
//       }
//     }
//   )


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
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
    

})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer