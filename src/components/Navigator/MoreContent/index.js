import React from 'react'
// import Link from 'next/link'

import { ICON_CMD } from '@config'

// import Popover from '@components/Popover'
// import DiscussLinker from '@components/DiscussLinker'

// import { ROUTE } from '@constant'
import Footer from './Footer'

import {
  Wrapper,
  BodyWrapper,
  Entry,
  Logo,
  Intro,
  Title,
  Desc,
  Wip,
} from '../styles/more_content'

const MoreContent = () => (
  <Wrapper>
    <BodyWrapper>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_indie.svg`} />
        <Intro>
          <Title>独立开发者</Title>
          <Desc>经验交流，开发者访谈，作品分享</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_job.svg`} />
        <Intro>
          <Title>酷工作</Title>
          <Desc>工作机会，职场交流，酷团队</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_weekly.svg`} />
        <Intro>
          <Title>
            周刊订阅 <Wip>开发中</Wip>
          </Title>
          <Desc>社区 RSS 订阅，专题周刊等</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_data.svg`} />
        <Intro>
          <Title>社区统计</Title>
          <Desc>各社区活跃度，成员排行等</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_vip.svg`} />
        <Intro>
          <Title>高级会员</Title>
          <Desc>升级高级会员，获得更好体验</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_sponsor.svg`} />
        <Intro>
          <Title>赞助与广告</Title>
          <Desc>赞助社区，广告投放..</Desc>
        </Intro>
      </Entry>
    </BodyWrapper>
    <Footer />
  </Wrapper>
)

export default MoreContent
