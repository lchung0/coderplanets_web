/*
 *
 * NaviMenu
 *
 */

import React, { useState } from 'react'
// import T from 'prop-types'

import { buildLog } from '@utils'
import { ICON_CMD } from '@config'

import { SpaceGrow } from '@components/BaseStyled'

import ChildrenItems from './ChildrenItems'

import { Wrapper, Item, Icon } from '../styles/children_menu/catalog'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const menu = [
  {
    id: '0',
    title: '开发效率',
    icon: `${ICON_CMD}/navi_fire.svg`,
    children: [
      {
        id: '101',
        title: '全部',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '102',
        title: '项目管理',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '103',
        title: 'GTD 工具',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '104',
        title: '写作 / 笔记',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      // {
      //   id: '105',
      //   title: '建站平台',
      //   icon: `${ICON_CMD}/navi_china.svg`,
      // }, --> 云服务
      {
        id: '106',
        title: '隐私安全',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
    ],
  },
  {
    id: '101',
    title: '设计工具',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '108',
    title: '基础设施',
    icon: `${ICON_CMD}/navi_fire.svg`,
    children: [
      {
        id: '101',
        title: '全部',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '102',
        title: '数据库',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
      {
        id: '103',
        title: '操作系统 ',
        icon: `${ICON_CMD}/navi_china.svg`,
      },
    ],
  },
  {
    id: '102',
    title: '云服务',
    icon: `${ICON_CMD}/navi_fire.svg`,
  },
  {
    id: '12',
    title: '公共数据',
    icon: `${ICON_CMD}/navi_group.svg`,
  },
  {
    // 非 IT，设计类的网站
    id: '103',
    title: '创投服务',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '14',
    title: '数据可视化',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '15',
    title: '运营分析',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    id: '16',
    title: '多媒体',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  // {
  //   id: '17',
  //   title: '视频相关',
  //   icon: `${ICON_CMD}/navi_china.svg`,
  // },
]

/* <ActiveDot /> */
const Catalog = () => {
  const [activeMenuId, setActiveMenuId] = useState(null)

  return (
    <Wrapper>
      {menu.map(item => (
        <div key={item.id}>
          <Item
            active={item.id === '0'}
            onClick={() => setActiveMenuId(item.id)}
          >
            <Icon active={item.id === '0'} src={item.icon} />
            <SpaceGrow />
            {item.title}
          </Item>
          {item.children && (
            <ChildrenItems
              activeMenuId={activeMenuId}
              parentId={item.id}
              items={item.children}
              itemOnClick={id => {
                console.log('click child item d: ', id)
              }}
            />
          )}
        </div>
      ))}
    </Wrapper>
  )
}

Catalog.propTypes = {
  // goBack: T.func.isRequired,
}

Catalog.defaultProps = {}

export default React.memo(Catalog)
