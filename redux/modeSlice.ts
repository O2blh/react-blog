import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 为 slice state 定义一个类型
interface CounterState {
  value: number
}

// 使用该类型定义初始 state
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { setMode } = counterSlice.actions

export default counterSlice.reducer
