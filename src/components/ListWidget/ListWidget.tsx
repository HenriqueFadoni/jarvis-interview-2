import React, { FunctionComponent, memo } from 'react'
import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()

  const onClickHandler = (chart: Chart) => {
    dispatch(selectList(chart))
  }

  const newRenderList = chartList.map((item, index) => (
    <div onClick={() => onClickHandler(item)} key={index}>
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
