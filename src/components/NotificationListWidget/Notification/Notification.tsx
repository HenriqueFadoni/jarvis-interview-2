import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteNotification } from '../../../store/actions'

const Notification: FunctionComponent = () => {
  const [renderList, setRenderList] = useState([]);
  const { notificationList } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const deleteEvent = (item: string) => {
    dispatch(deleteNotification(item))
  }

  useEffect(() => {
    if (notificationList) {
      const newRenderList = notificationList.map((item: string, index: number) => (
        <div
          className="notification-widget__notification"
          key={index}
        >
          <h3>{item}</h3>
          <button onClick={() => deleteEvent(item)}>X</button>
        </div>
      ))
      setRenderList(newRenderList);
    }
  }, [notificationList])

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

export default Notification
