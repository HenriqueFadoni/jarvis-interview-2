import React, { FunctionComponent } from 'react'
import { ChartList } from '../../store/types/chartList'

import DashboardLeft from './DashboardLeft/DashboardLeft'
import DashboardRight from './DashboardRight/DashboardRight'

const DashboardWidgets: FunctionComponent<ChartList> = ({ chartList }) => (
  <div className="dashboard-widgets">
    <DashboardLeft chartList={chartList} />
    <DashboardRight />
  </div>
)

export default DashboardWidgets
