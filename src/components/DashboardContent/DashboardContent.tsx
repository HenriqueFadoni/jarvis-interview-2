import React, { FunctionComponent, memo } from 'react'
import { ChartList } from '../../store/types/chartList'

const DashboardContent: FunctionComponent<ChartList> = ({ chartList }) => {
  const renderList = chartList.map((chart, index) => {
    const renderChartData = chart.data.map((data, index) => (
      <div key={index} className="dashboard-table__row--cell">
        <h3>{data.time}</h3>
        <h3>{data.value}</h3>
      </div>
    ))

    return (
      <div key={index} className="dashboard-table__row">
        <div className="dashboard-table__row--header">
          <h3>{chart.name}</h3> 
        </div>
        {renderChartData}
      </div>
    )
  })

  return (
    <div className="dashboard-content">
      <h1>DashBoard Example</h1>
      <div className="dashboard-table__container">
        {renderList}
      </div>
    </div>
  )
}

export default memo(DashboardContent)
