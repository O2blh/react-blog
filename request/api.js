import { service } from './index'

const GET_ARTICLES = '/getArticles'
const GET_ARTICLE_BY_ID = '/getArticleById'
const GET_CLASSIFIES = '/getClassifies'
const GET_TAGS = '/getTags'
const GET_NOTICE = '/getNotice'

export const getArticles = async ({ page = 1, limit = 10 }) => {
  const res = await service.get(`${GET_ARTICLES}?page=${page}&limit=${limit}`)
  return res.data
}

export const getArticleById = async (id) => {
  const res = await service.get(`${GET_ARTICLE_BY_ID}?id=${id}`)
  return res.data
}

export const getClassifies = async () => {
  const res = await service.get(GET_CLASSIFIES)
  return res.data
}

export const getTags = async () => {
  const res = await service.get(GET_TAGS)
  return res.data
}

export const getNotice = async () => {
  const res = await service.get(GET_NOTICE)
  return res.data[0]
}
