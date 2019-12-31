import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { newNotification } from '../../../store/actions/index'

const NotificationButton: FunctionComponent = () => {
  const dispatch = useDispatch()

  const onClick = () => dispatch(newNotification())

  return (
    <button
      className="notification-widget__btn"
      onClick={onClick}
    >
      New Notification
    </button>
  )
}

export default NotificationButton
