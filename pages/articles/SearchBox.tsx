import React, { useState } from 'react'
import { RedoOutlined, ArrowRightOutlined } from '@ant-design/icons'

import { useRouter } from 'next/router'
import styles from './index.module.css'

interface IProps {
  onKeywordChange: any
}

const SearchBox: React.FC<IProps> = ({ onKeywordChange }) => {
  const router = useRouter()
  let defaultKeyword = ''
  if (router.query.keyword) {
    defaultKeyword = decodeURIComponent(router.query.keyword)
  }

  const [keyword, setKeyword] = useState(defaultKeyword)
  const onSearch = () => {
    onKeywordChange(keyword)
  }

  const onRefresh = () => {
    setKeyword('')
    onKeywordChange('')
  }

  return (
    <div className={styles.searchBox}>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='搜索文章标题...'
        className={styles.searchInput}
      />
      <div className={styles.btn} onClick={onSearch}>
        <ArrowRightOutlined />
      </div>
      <div className={styles.btn} onClick={onRefresh}>
        <RedoOutlined />
      </div>
    </div>
  )
}

export default SearchBox
