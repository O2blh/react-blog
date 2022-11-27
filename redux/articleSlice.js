import { createSlice } from '@reduxjs/toolkit'

export const ArticleSlice = createSlice({
  name: 'article',
  initialState: {
    article: 0,
    getCommentList: () => {},
  },
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload
    },
    setGetCommentListFunc: (state, action) => {
      state.getCommentList = action.payload
    },
  },
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { setArticle, setGetCommentListFunc } = ArticleSlice.actions

export default ArticleSlice.reducer
