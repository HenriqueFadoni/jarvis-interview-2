import React, { FunctionComponent, memo } from 'react'

import { selectList } from '../../store/actions/index'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'

interface ChartData {
  time: string,
  value: number
}

interface Chart {
  name: string,
  data: Array<ChartData>
}

interface ListWidgetProps {
  chartList: Array<Chart>
}

const ListWidget: FunctionComponent<ListWidgetProps> = ({ chartList }) => {
  list: string[]
  }

  const newRenderList = chartList.map((item, index) => (
// Add On Click Event => Changes Redux State (Selected Item)
const ListWidget: FunctionComponent<ListWidgetProps> = ({ list }) => {
  const newRenderList = list.map((item, index) => (
    <div key={index}>
      <h3>{item}</h3>
      <h3>{item.name}</h3>
    </div>
  ));

  return (
    <DropBox>
      <Widget id="ListWidget">
        {newRenderList}
      </Widget>
    </DropBox>
  )
}

export default memo(ListWidget)
