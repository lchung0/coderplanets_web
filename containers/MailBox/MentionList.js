import React from 'react'
import R from 'ramda'

import EmptyMsg from './EmptyMsg'

const MentionList = ({ data }) => {
  console.log('data: ', R.isEmpty(data))
  if (R.isEmpty(data)) return <EmptyMsg type="mentions" />

  return <h3>MentionList</h3>
}

export default MentionList
