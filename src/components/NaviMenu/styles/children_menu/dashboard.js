import styled from 'styled-components'

import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-end')};
  justify-content: space-between;
  width: 130px;
  height: 66px;
  color: #7c8f90;
  background: #003948;
  padding: 6px;
  padding-bottom: 0;
  margin-top: 5px;
  margin-bottom: 0;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.42);
  border-radius: 4px;
`
export const Footer = styled.div`
  ${cs.flex()};
`
export const PadIcon = styled(Img)`
  fill: #7c8f90;
  width: 18px;
  height: 18px;
  display: block;
  margin-left: 8px;
  border-bottom: 2px solid;
  border-bottom-color: ${({ active }) => (active ? '#7c8f90' : 'transparent')};
  padding-bottom: 2px;

  &:hover {
    cursor: pointer;
  }
`
