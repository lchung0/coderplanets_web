import React from 'react'

import { ICON_ASSETS } from '../../config/assets'

import { Button } from '../../components'
import { Wrapper, StateIcon, StateButton, DividerIcon } from './styles/addons'
import * as logic from './logic'

const AddOns = () => (
  <Wrapper>
    <Button size="small" type="primary" ghost onClick={logic.upgradeHepler}>
      upgrade
    </Button>
    &nbsp;&nbsp;&nbsp;
    <Button size="small" type="primary" ghost onClick={logic.toast}>
      toast
    </Button>
    &nbsp;&nbsp;&nbsp;
    <StateButton
      size="small"
      type="primary"
      ghost
      onClick={logic.previewState.bind(this, 'mst-state')}
    >
      <StateIcon src={`${ICON_ASSETS}/cmd/header_state.svg`} />
      <div>STATE</div>
    </StateButton>
    <DividerIcon src={`${ICON_ASSETS}/cmd/more.svg`} />
  </Wrapper>
)

export default AddOns
