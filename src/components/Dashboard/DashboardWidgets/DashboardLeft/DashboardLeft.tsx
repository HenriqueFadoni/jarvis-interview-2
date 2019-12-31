import React, { FunctionComponent } from 'react'
import { ChartList } from '../../../../store/types/chartList'

import ListWidget from '../../../Widgets/ListWidget/ListWidget'
import ChartWidget from '../../../Widgets/ChartWidget/ChartWidget'
import NotificationListWidget from '../../../Widgets/NotificationListWidget/NotificationListWidget'

const DashboardLeft: FunctionComponent<ChartList> = ({ chartList }) => (
  <div className="dashboard-widgets--left">
    <ListWidget chartList={chartList} />
    <ChartWidget />
    <NotificationListWidget />
  </div>
)

export default DashboardLeft
