import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'mode',
  initialState: {
    value: 0,
  },
  reducers: {
    setMode: (state, action) => {
      state.value = action.payload
    },
  },
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { setMode } = counterSlice.actions

export default counterSlice.reducer
