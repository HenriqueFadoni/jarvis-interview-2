import React, { FunctionComponent } from 'react'

import DropBox from '../../DropBox/DropBox'
import NotificationButtonWidget from '../../NotificationButtonWidget/NotificationButtonWidget'

const DashboardRight: FunctionComponent = () => (
  <div className="dashboard-widgets--right">
    <NotificationButtonWidget />
    <DropBox direction='right' />
    <DropBox direction='right' />
  </div>
)

export default DashboardRight
