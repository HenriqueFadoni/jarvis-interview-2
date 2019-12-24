import React, { FunctionComponent, memo } from 'react'

import DropBox from '../DropBox/DropBox'
import Widget from '../Widget/Widget'

interface ListWidgetProps {
  list: string[]
}

// Add On Click Event => Changes Redux State (Selected Item)
const ListWidget: FunctionComponent<ListWidgetProps> = ({ list }) => {
  const newRenderList = list.map((item, index) => (
    <div key={index}>
      <h3>{item}</h3>
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
