import * as actionTypes from '../types/actionTypes'

import { Chart } from '../types/chartList'
import { AppActions } from '../types/actionTypes'

export const selectList = (selectedList: Chart): AppActions => {
  return {
    type: actionTypes.SELECT_LIST,
    payload: {
      selectedList
    }
  }
}

export const newNotification = (): AppActions => {
  return {
    type: actionTypes.NEW_NOTIFICATION
  }
}

export const deleteNotification = (notificationItem: string): AppActions => {
  return {
    type: actionTypes.DELETE_NOTIFICATION,
    payload: {
      notificationItem
    }
  }
}
