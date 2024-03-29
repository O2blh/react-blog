import { service } from './index'

const GET_ARTICLES_PAGINATION = '/getArticlesPagination'
const GET_ARTICLE_BY_ID = '/getArticleById'
const GET_ALL_ARTICLE = '/getAllArticle'
const GET_CLASSIFIES = '/getClassifies'
const GET_TAGS = '/getTags'
const GET_NOTICE = '/getNotice'

export const getArticlesPagination = async ({ page = 1, limit = 10, keyword = '' }) => {
  const res = await service.get(`${GET_ARTICLES_PAGINATION}?page=${page}&limit=${limit}&keyword=${keyword}`)
  console.log('getArticlesPagination', res)
  return res
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

export const getArticlesByClassify = async (classify) => {
  const res = await service.post('getArticlesByClassify', {
    classify,
  })
  return res.data
}

export const getArticlesByTag = async (tag) => {
  const res = await service.post('getArticlesByTag', {
    tag,
  })
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

export const getComments = async (articleId) => {
  const res = await service.post('/getComments', { articleId })
  return res.data
}

export const addComment = async (comment) => {
  const res = await service.post('/addComment', comment)
  return res
}

export const getGalleryList = async () => {
  const res = await service.get('/getGalleryList')
  return res.data
}

export const getGalleryById = async (id) => {
  const res = await service.post('/getGalleryById', {
    id,
  })
  return res.data
}

export const getSays = async () => {
  const res = await service.get('/getSays')
  return res.data
}

export const getMsgs = async () => {
  const res = await service.post('/getMsgs')
  return res.data
}

export const addMsg = async (comment) => {
  const res = await service.post('/addMsg', comment)
  return res
}

export const getFriendsLink = async () => {
  const res = await service.post('/getFriendsLink')
  return res.data
}

export const getWorks = async () => {
  const res = await service.post('/getWorks')
  return res.data
}

export const getWebSiteLog = async () => {
  const res = await service.post('/getWebSiteLog')
  return res.data
}

export const getAbout = async () => {
  const res = await service.post('/getAbout')
  return res.data
}
