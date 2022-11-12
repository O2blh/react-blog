import { service } from './index'

const GET_ARTICLES_PAGINATION = '/getArticlesPagination'
const GET_ARTICLE_BY_ID = '/getArticleById'
const GET_ALL_ARTICLE = '/getAllArticle'
const GET_CLASSIFIES = '/getClassifies'
const GET_TAGS = '/getTags'
const GET_NOTICE = '/getNotice'

export const getArticlesPagination = async ({ page = 1, limit = 10 }) => {
  const res = await service.get(`${GET_ARTICLES_PAGINATION}?page=${page}&limit=${limit}`)
  return res.data
}

export const getAllArticle = async () => {
  const res = await service.get(GET_ALL_ARTICLE)
  return res.data
}

export const getAllArticleId = async () => {
  const res = await service.get(GET_ALL_ARTICLE)
  return res.data.map((item) => {
    return {
      params: {
        id: item._id,
      },
    }
  })
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

export const accessLog = (params) => {
  service.post('/accessLog', params)
}

export const getSiteAccessCount = async () => {
  const res = await service.get('/getAccessLogCount')
  return res
}
