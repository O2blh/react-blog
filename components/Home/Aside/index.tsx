import React from 'react'
import { IClassify, ITag, INotice } from '@/interface'
import WelcomeCard from './WelcomeCard'
import LinkCard from './LinkCard'
import StatisticsCard from './StatisticsCard'
import NoticeCard from './NoticeCard'
import ColckCard from './ColckCard'
import TagsCard from './TagsCard'
import SiteInfoCard from './SiteInfoCard'

import styles from './style.module.css'

interface IProps {
  total: number
  classifies: Array<IClassify>
  tags: Array<ITag>
  notice: INotice
}

const Aside: React.FC<IProps> = ({ total, classifies, tags, notice }) => {
  return (
    <aside className={styles.aside}>
      <WelcomeCard />
      <LinkCard />
      <StatisticsCard articleCount={total} classifyCount={classifies.length} tagCount={tags.length} />
      <NoticeCard notice={notice.notice} />
      <ColckCard />
      <TagsCard tags={tags} />
      <SiteInfoCard />
    </aside>
  )
}

export default Aside
