import React, { FunctionComponent, ReactNode } from 'react'

interface DropBoxProps {
  children?: ReactNode,
  startWidth?: number,
  startHeight?: number
}

const onDrop = (event: any) => {
  const getData = event.dataTransfer.getData('id')
  const getElement = document.getElementById(getData)
  event.target.appendChild(getElement)
}

const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault()
}

let parent: HTMLDivElement;
let width: number;
let height: number;
let startX: number;
let startY: number;
const resizeComponent = (env: any) => {
  parent.style.width = `${env.clientX + width - startX}px`
  parent.style.height = `${env.clientY + height - startY}px`
}

const cleanUpEvents = (env: any) => {
  document.removeEventListener('mousemove', resizeComponent)
  document.removeEventListener('mouseup', cleanUpEvents)
}

const onResizeStart = (event: any) => {
  event.preventDefault()
  parent = event.target.parentNode
  width = Number(getComputedStyle(parent).width.replace('px', ''))
  height = Number(getComputedStyle(parent).height.replace('px', ''))
  startX = event.clientX;
  startY = event.clientY;

  document.addEventListener('mousemove', resizeComponent)
  document.addEventListener('mouseup', cleanUpEvents)
}

const DropBox: FunctionComponent<DropBoxProps> = ({ children, startWidth = 100, startHeight = 100 }) => (
  <div
    className="drop-box"
    onDrop={onDrop}
    onDragOver={onDragOver}
    style={{
      width: `${startWidth}px`,
      height: `${startHeight}px`,
    }}
  >
    {children}
    <span
      className="drop-box__resize"
      onMouseDown={onResizeStart}
    />
  </div>
)

export default DropBox
