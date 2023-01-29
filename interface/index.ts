export interface IArticle {
  _id: string
  articleContent: string
  articleTitle: string
  classify: string
  tags: Array<string>
  abstract: string
  draftId: string
  modifyDate: number
  publishDate: number
}
export interface IClassify {
  _id: string
  classify: string
  count: number
}
export interface ITag {
  _id: string
  tag: string
}

export interface INotice {
  _id: string
  notice: string
}

export interface IComment {
  _id: string
  articleId: string
  commentId: string
  replyId: string
  avatar: string
  qq: string
  nickname: string
  email: string
  url: string
  date: number
  comment: string
  replyList: Array<IComment>
}

export interface IGallery {
  _id: string
  title: string
  descr: string
  cover: string
  pics: Array<string>
}

export interface ISay {
  _id: string
  content: string
  publishDate: number
  updateDate: number
}

export interface IFriendLink {
  _id: string
  name: string
  desc: string
  avatar: string
  url: string
}

export interface IWork {
  _id: string
  name: string
  desc: string
  cover: string
  url: string
}

export interface ISiteLog {
  _id: string
  content: string
  logDate: number
}

export interface IAbout {
  _id: string
  content: string
  modifyDate: string
  type: number
}
