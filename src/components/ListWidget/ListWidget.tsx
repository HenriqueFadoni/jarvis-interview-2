import React, { FunctionComponent, useState, useEffect } from 'react'

interface ListWidgetProps {
  list: string[]
}

// Add On Click Event => Changes Redux State (Selected Item)
const ListWidget: FunctionComponent<ListWidgetProps> = ({ list }) => {
  const [renderList, setRenderList] = useState()

  useEffect(() => {
    const newRenderList = list.map((item, index) => (
      <div key={index}>
        <h3>{item}</h3>
      </div>
    ));

    setRenderList(newRenderList);
  }, [list])

  return (
    <div>
      {renderList}
    </div>
  )
}

export default ListWidget
