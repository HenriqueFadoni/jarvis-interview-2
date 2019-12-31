import React, { FunctionComponent } from 'react'
import { ChartList } from '../../../store/types/chartList'

import ListWidget from '../../ListWidget/ListWidget'
import ChartWidget from '../../ChartWidget/ChartWidget'
import NotificationListWidget from '../../NotificationListWidget/NotificationListWidget'

const DashboardLeft: FunctionComponent<ChartList> = ({ chartList }) => (
  <div className="dashboard-widgets--left">
    <ListWidget chartList={chartList} />
    <ChartWidget />
    <NotificationListWidget />
  </div>
)

export default DashboardLeft
