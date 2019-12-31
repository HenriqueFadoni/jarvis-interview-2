import React, { FunctionComponent, ReactNode } from 'react'

interface DropBoxProps {
  children?: ReactNode,
  startWidth?: number,
  startHeight?: number,
  direction?: string
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
let resizeDirection: string;
const resizeComponent = (event: any) => {
  parent.style.width = resizeDirection === 'right'
    ? `${startX + width - event.clientX}px`
    : `${event.clientX + width - startX}px`

  parent.style.height = `${event.clientY + height - startY}px`
}

const cleanUpEvents = () => {
  document.removeEventListener('mousemove', resizeComponent)
  document.removeEventListener('mouseup', cleanUpEvents)
}

const onResizeStart = (event: any, direction: string) => {
  event.preventDefault()
  parent = event.target.parentNode
  width = Number(getComputedStyle(parent).width.replace('px', ''))
  height = Number(getComputedStyle(parent).height.replace('px', ''))
  startX = event.clientX
  startY = event.clientY
  resizeDirection = direction

  document.addEventListener('mousemove', resizeComponent)
  document.addEventListener('mouseup', cleanUpEvents)
}

const DropBox: FunctionComponent<DropBoxProps> = ({ children, startWidth = 100, startHeight = 100, direction = 'left' }) => (
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
      className={`drop-box__resize--${direction}`}
      onMouseDown={(event: any) => onResizeStart(event, direction)}
    />
  </div>
)

export default DropBox
