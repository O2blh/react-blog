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
