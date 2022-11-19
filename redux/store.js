import { configureStore } from '@reduxjs/toolkit'
import modeSlice from './modeSlice'

export default configureStore({
  reducer: {
    mode: modeSlice,
  },
})
