import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  width: 100%;
  margin-bottom: 25px;
  color: ${theme('thread.articleDigest')};
`
export const DatesWrapper = styled.div`
  ${cs.flex()}
  flex-wrap: wrap;
  width: 100%;
`
export const WeekName = styled.div`
  width: 14px;
  height: 14px;
  font-size: 13px;
  background: #126682;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
`
export const DateItem = styled.div`
  ${cs.flexColumn('justify-between')};
  border: 1px solid;
  border-color: #004354;
  width: 55px;
  height: 45px;
  padding-left: 3px;
  background: ${({ active }) => (active ? '#003b4c' : '#04303c')};
  border-top-color: ${({ active }) => (active ? '#3680AD' : '#004354')};
  margin-right: ${({ margin }) => (margin ? '25px' : '')};
`
export const Head = styled.div`
  ${cs.flex('justify-between')};
  align-items: center;
  padding-right: 3px;
`
export const DateText = styled.div`
  color: ${({ active }) => (active ? '#27908f' : '')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`
export const WeekHint = styled.div`
  font-size: 10px;
  margin-right: 2px;
`
export const WeekendHint = styled.div`
  font-size: 9px;
  padding: 0 2px;
  color: #c7c7c7;
  background: #275e82;
  border-radius: 2px;
  margin-top: -1px;
  margin-right: 2px;
`
export const Foot = styled.div`
  ${cs.flex()};
  margin-bottom: 5px;
`
