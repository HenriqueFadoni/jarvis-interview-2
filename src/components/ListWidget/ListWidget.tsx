import React, { FunctionComponent, memo } from 'react'
import { useDispatch } from 'react-redux'
import { ChartList, Chart } from '../../store/types/chartList'

import { selectList } from '../../store/actions/index'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'

const ListWidget: FunctionComponent<ChartList> = ({ chartList }) => {
  const dispatch = useDispatch()

  const onClickHandler = (chart: Chart) => {
    dispatch(selectList(chart))
  }

  const newRenderList = chartList.map((item, index) => (
    <div
      className="list-widget"
      onClick={() => onClickHandler(item)} key={index}
    >
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
