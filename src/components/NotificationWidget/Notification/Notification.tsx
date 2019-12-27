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

  const renderList = notificationList.map((item: any, index: any) => (
    <div key={index}>
      <h3>{item}</h3>
      <button onClick={() => deleteEvent(item)}>X</button>
    </div>
  ))

  return (
    <div>
      <button onClick={onClick}>New Notification</button>
      {renderList}
    </div>
  )
}

export default Notification