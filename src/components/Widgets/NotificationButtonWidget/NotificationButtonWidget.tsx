import React, { FunctionComponent } from 'react'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'
import NotificationButton from './NotificationButton/NotificationButton'

const NotificationButtonWidget: FunctionComponent = () => (
  <DropBox startHeight={200} startWidth={200} direction='right'>
    <Widget id="NotificationButtonWidget">
      <NotificationButton />
    </Widget>
  </DropBox>
)

export default NotificationButtonWidget
