import React, { FunctionComponent } from 'react'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'
import Notification from './Notification/Notification'

const NotificationWidget: FunctionComponent = () => (
  <DropBox startHeight={300} startWidth={100}>
    <Widget id="NotificationWidget">
      <Notification />
    </Widget>
  </DropBox>
)

export default NotificationWidget