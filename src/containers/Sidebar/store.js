/*
 * SidebarStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { buildLog, markStates, stripMobx, sortByIndex, notEmpty } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:SidebarStore')

const SidebarStore = t
  .model('SidebarStore', {
    // open: t.optional(t.boolean, false),
    pin: t.optional(t.boolean, false),
    // add shadow effect to homebar when user scroll the communities list
    showHeaderShadow: t.optional(t.boolean, false),
    // add shadow effect to footer when user scroll the communities list
    showFooterShadow: t.optional(t.boolean, false),
    searchCommunityValue: t.optional(t.string, ''),
    // after user click custom sort option in footer
    sortOptActive: t.optional(t.boolean, false),

    /*
       this is a fix for wired svg icon in sidebar
       when community icon is svg format, the svg loader only do it:s work
       on client-side, which will case MenuBar UI choas

       manulay force mobx rerender will tmp fix this, heck later
     */
    forceRerender: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get theme() {
      return self.root.theme
    },
    get langs() {
      return self.root.langs
    },
    get getLoading() {
      return self.loading
    },
    get langMessages() {
      return self.root.langMessages
    },
    get communitiesData() {
      const { searchCommunityValue } = self
      const { subscribedCommunities } = self.root.account

      if (notEmpty(R.trim(searchCommunityValue))) {
        return R.filter(
          item => R.contains(searchCommunityValue, R.prop('title', item)),
          subscribedCommunities.entries
        )
      }

      return subscribedCommunities
        ? sortByIndex(subscribedCommunities.entries)
        : []
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    // load Subscribed communities
    loadCommunities(data) {
      self.root.account.loadSubscribedCommunities(data)
    },
    onSortCommunities(entries) {
      const data = R.merge(self.root.account.subscribedCommunities, { entries })
      self.loadCommunities(data)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default SidebarStore
