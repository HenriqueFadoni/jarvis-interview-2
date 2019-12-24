import React, { FunctionComponent, ReactNode } from 'react'

interface DropBoxProps {
  children?: ReactNode
}

const onDrop = (event: any) => {
  const getData = event.dataTransfer.getData('id')
  const getElement = document.getElementById(getData)
  event.target.appendChild(getElement)
}

const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault()
}

const DropBox: FunctionComponent<DropBoxProps> = ({ children }) => (
  <div
    onDrop={onDrop}
    onDragOver={onDragOver}
    style={{
      margin: '10px',
      backgroundColor: 'grey',
      width: '100px',
      height: '100px'
    }}
  >
    {children}
  </div>
)

export default DropBox
