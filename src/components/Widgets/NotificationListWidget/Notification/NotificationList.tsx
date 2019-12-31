import React, { FunctionComponent, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteNotification } from '../../../../store/actions'

const Notification: FunctionComponent = () => {
  const { notificationList } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const deleteEvent = (item: string) => dispatch(deleteNotification(item))

  let renderList = notificationList.map((item: string, index: number) => (
    <div
      className="notification-widget__notification"
      key={index}
    >
      <h3>{item}</h3>
      <button onClick={() => deleteEvent(item)}>X</button>
    </div>
  ))

  return (
    <div className="notification-widget__container">
      {
        renderList.length > 0
          ? renderList
          : <h3>No New Notifications</h3>
      }
    </div>
  )
}

export default memo(Notification)
