import React, { FunctionComponent } from 'react'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'
import Notification from './Notification/Notification'

const NotificationListWidget: FunctionComponent = () => (
  <DropBox startHeight={300} startWidth={200}>
    <Widget id="NotificationListWidget">
      <Notification />
    </Widget>
  </DropBox>
)

export default NotificationListWidget
