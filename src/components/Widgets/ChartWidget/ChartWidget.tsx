import React, { FunctionComponent, memo } from 'react'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'
import Chart from './Chart/Chart'

const ChartWidget: FunctionComponent = () => (
  <DropBox startHeight={300} startWidth={400}>
    <Widget id="ChartWidget">
      <Chart />
    </Widget>
  </DropBox>
)

export default memo(ChartWidget)
