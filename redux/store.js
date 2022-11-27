import { configureStore } from '@reduxjs/toolkit'
import modeSlice from './modeSlice'
import articleSlice from './articleSlice'

export default configureStore({
  reducer: {
    mode: modeSlice,
    article: articleSlice,
  },
})
