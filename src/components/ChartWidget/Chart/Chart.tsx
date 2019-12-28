import React, { FunctionComponent, memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { createChart } from 'lightweight-charts'
import { ListReducerState } from '../../../store/types/reducerTypes'

let chart: any;
let lineSeries: any;
const Chart: FunctionComponent = () => {
  const { selectedList } = useSelector((state: ListReducerState) => state)
  const chartRoot = useRef()

  useEffect(() => {
    if (selectedList && selectedList.data) {
      if (!chart) {
        // @ts-ignore
        chart = createChart(chartRoot.current, { width: 400, height: 300 })
        lineSeries = chart.addLineSeries()
      }

      lineSeries.setData(selectedList.data)
    }
  }, [selectedList])
  // @ts-ignore
  return selectedList ? <div ref={chartRoot}></div> : <h3>Select a Chart</h3>
}

export default memo(Chart)
