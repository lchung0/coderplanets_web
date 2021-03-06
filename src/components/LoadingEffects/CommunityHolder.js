import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import {
  BannerWrapper,
  BannerText,
  CommunitiesText,
  SidebarText,
} from './styles/community_holder'

const CommunityHolder = ({ place, text }) => {
  switch (place) {
    case 'sidebar':
      return <SidebarText>{R.toUpper(text.slice(0, 1))}</SidebarText>

    case 'communities':
      return <CommunitiesText>{R.toUpper(text.slice(0, 2))}</CommunitiesText>

    default:
      return (
        <BannerWrapper>
          <BannerText>{text}</BannerText>
        </BannerWrapper>
      )
  }
}

CommunityHolder.propTypes = {
  text: T.string.isRequired,
  place: T.oneOf(['banner', 'sidebar', 'communities']),
}

CommunityHolder.defaultProps = {
  place: 'banner',
}

export default CommunityHolder
