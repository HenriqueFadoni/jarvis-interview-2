import React, { FunctionComponent, ReactNode } from 'react'

interface WidgetProps {
  id: string,
  children: ReactNode
}

const onDragStart = (event: any) => {
  event.dataTransfer.setData('id', event.target.id)
}

const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault()
}

const Widget: FunctionComponent<WidgetProps> = ({ id, children }) => (
  <div
    id={id}
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    style={{
      height: '100%',
      width: '100%'
    }}
    draggable
  >
    {children}
  </div>
)

export default Widget
