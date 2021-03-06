import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')}
  justify-content: center;
  width: 20%;
  padding-left: 6px;
`
export const IconWrapper = styled.div`
  position: relative;
`
export const SettingPanelWrapper = styled.div`
  padding: 10px;
  width: 140px;
`
export const SettingItem = styled.div`
  ${cs.flex('align-center')};
  justify-content: space-between;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 4px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const SettingDivider = styled.div`
  background-color: ${theme('thread.articleDigest')};
  opacity: 0.5;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  height: 1px;
`
export const SelectIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  display: block;
`
export const SelectDot = styled.div`
  background: ${theme('thread.articleDigest')};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 5px;
  display: block;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  display: block;
  width: 18px;
  height: 18px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
