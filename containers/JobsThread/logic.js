import R from 'ramda'
import {
  asyncRes,
  asyncErr,
  makeDebugger,
  dispatchEvent,
  EVENT,
  ERR,
  TYPE,
  $solver,
  scrollIntoEle,
  GA,
} from '../../utils'

import { PAGE_SIZE } from '../../config'
import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_POSTS, EVENT.PREVIEW_CLOSED],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobsThread')
/* eslint-enable no-unused-vars */

let jobsThread = null
let sub$ = null

const validFilter = R.pickBy(
  R.compose(
    R.not,
    R.isEmpty
  )
)

export function inAnchor() {
  jobsThread.setHeaderFix(false)
}

export function outAnchor() {
  jobsThread.setHeaderFix(true)
}

export function loadJobs(page = 1) {
  debug('loadJobs ...')
  jobsThread.markState({
    curView: TYPE.LOADING,
  })

  const args = {
    /* first: 4, */
    filter: {
      page,
      size: PAGE_SIZE.POSTSPAPER_POSTS,
      ...jobsThread.curFilter,
      tag: jobsThread.activeTagData.title,
    },
  }

  /* console.log('loadJobs --> ', args) */
  args.filter = validFilter(args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)
  sr71$.query(S.pagedJobs, args)
}

export function loadTags() {
  const community = jobsThread.curRoute.mainPath

  const args = {
    thread: 'JOB',
    community,
  }

  sr71$.query(S.partialTags, args)
}

export function onFilterSelect(key, val) {
  jobsThread.selectFilter(key, val)
  loadJobs()
}

export function onTagSelect(obj) {
  jobsThread.selectTag(obj)
  loadJobs()
}

export function onTitleSelect(activeJob) {
  jobsThread.markState({ activeJob })
  dispatchEvent(EVENT.NAV_EDIT, {
    type: TYPE.POST_PREVIEW_VIEW,
    data: activeJob,
  })
  debug('activeJob: ', activeJob)

  GA.event({
    action: activeJob.title,
    category: '浏览',
    label: '社区',
  })
}

export function createContent() {
  debug('onTitleSelect createContent ')
  dispatchEvent(EVENT.NAV_CREATE_POST, { type: TYPE.PREVIEW_CREATE_POST })
}

const DataSolver = [
  {
    match: asyncRes('pagedJobs'),
    action: ({ pagedJobs }) => {
      let curView = TYPE.RESULT
      if (pagedJobs.entries.length === 0) {
        curView = TYPE.NOT_FOUND
      }
      jobsThread.markState({
        curView,
        pagedJobs,
      })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags }) => {
      return jobsThread.markState({
        tags: partialTags,
      })
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: res => {
      debug('EVENT.REFRESH_POSTS: ', res)
      loadJobs()
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => jobsThread.markState({ activeJob: {} }),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(selectedStore) {
  jobsThread = selectedStore

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadJobs()
  setTimeout(() => {
    loadTags()
  }, 500)
}
