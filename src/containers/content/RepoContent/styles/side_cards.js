import styled from 'styled-components'

import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  min-width: 250px;
  ${cs.media.tablet`display: none`};
`
export const ReportWrapper = styled.div`
  padding: 0 10px;
`
