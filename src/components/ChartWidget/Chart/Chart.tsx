import React, { FunctionComponent, memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { createChart } from 'lightweight-charts';

const Chart: FunctionComponent = () => {
  const { selectedList } = useSelector((state: any) => state)

  useEffect(() => {
    if (selectedList && selectedList.data) {
      const selectChartDiv = document.querySelector('#chart-root')
        // @ts-ignore
        const chart = createChart(selectChartDiv, { width: 400, height: 300 })
        const lineSeries = chart.addLineSeries()
        lineSeries.setData(selectedList.data)
    }
  }, [selectedList]);

  return selectedList ? <div id='chart-root'></div> : <h3>Select a List</h3>
}

export default memo(Chart)
