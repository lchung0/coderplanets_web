/*
 *
 * Sidebar
 *
 */

import React from 'react'
import R from 'ramda'

import { connectStore, buildLog } from '@utils'

import Header from './Header'
import MenuList from './MenuList'
import MenuBar from './MenuBar'
import Footer from './Footer'

import { Wrapper, HeaderShadow } from './styles'
import { useInit, onSortMenuEnd } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Sidebar:index')

const SidebarContainer = ({ sidebar }) => {
  useInit(sidebar)

  const {
    curCommunity,
    pin,
    searchCommunityValue,
    showHeaderShadow,
    showFooterShadow,
    sortOptActive,
    communitiesData,
    forceRerender,
  } = sidebar

  // onMouseLeave={logic.leaveSidebar}
  // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
  const activeRaw = curCommunity.raw
  const homeCommunity = R.filter(R.propEq('raw', 'home'), communitiesData)[0]

  return (
    <Wrapper pin={pin} testid="sidebar">
      <Header pin={pin} searchCommunityValue={searchCommunityValue} />

      {/*
        move home community out of menulist to avoid rerender
         */}
      <MenuBar pin={pin} item={homeCommunity} activeRaw={activeRaw} />
      <HeaderShadow dropShadow={showHeaderShadow} />

      <MenuList
        items={communitiesData}
        pin={pin}
        sortOptActive={sortOptActive}
        showHeaderShadow={false}
        forceRerender={forceRerender}
        activeRaw={activeRaw}
        onSortEnd={onSortMenuEnd}
        distance={5}
      />
      <Footer
        pin={pin}
        showFooterShadow={showFooterShadow}
        sortOptActive={sortOptActive}
      />
    </Wrapper>
  )
}

export default connectStore(SidebarContainer)
