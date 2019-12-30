import { Chart } from './chartList'

// Action Types
export const SELECT_LIST = 'SELECT_LIST'
export const NEW_NOTIFICATION = 'NEW_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'

// Action Interfaces
export interface SelectList {
  type: typeof SELECT_LIST,
  payload: {
    selectedList: Chart
  }
}

export interface NewNotification {
  type: typeof NEW_NOTIFICATION
}

export interface DeleteNotification {
  type: typeof DELETE_NOTIFICATION,
  payload: {
    notificationItem: string
  }
}

//Bundling Up and Exporting
export type SelectListActionTypes = SelectList
export type NotificationList = NewNotification | DeleteNotification
export type AppActions = SelectList | NotificationList
