import React, { FunctionComponent, useState } from 'react'

const Notification: FunctionComponent = () => {
  const [notificationList, setNotificationList] = useState([])

  const onClick = () => {
    const newNotificationList = notificationList
    const newNotification = `List ${notificationList.length}`
    // @ts-ignore
    newNotificationList.push(newNotification)
    setNotificationList([ ...newNotificationList])
  }

  const deleteEvent = (item: string) => {
    const newNotificationList = notificationList.filter(el => el !== item)
    setNotificationList([ ...newNotificationList])
  }

  const renderList = notificationList.map((item: string, index: number) => (
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
      <button
        className="notification-widget__btn"
        onClick={onClick}
      >
        New Notification
      </button>
      {renderList}
    </div>
  )
}

export default Notification