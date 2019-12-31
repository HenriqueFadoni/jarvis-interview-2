import React, { FunctionComponent } from 'react'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'
import NotificationList from './Notification/NotificationList'

const NotificationListWidget: FunctionComponent = () => (
  <DropBox startHeight={300} startWidth={200}>
    <Widget id="NotificationListWidget">
      <NotificationList />
    </Widget>
  </DropBox>
)

export default NotificationListWidget
