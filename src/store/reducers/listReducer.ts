import * as actionTypes from '../types/actionTypes'

import { ListReducerState } from '../types/reducerTypes'
import { AppActions, SelectListActionTypes, DeleteNotification } from '../types/actionTypes'

const initialState: ListReducerState = {
  selectedList: null,
  notificationList: []
}

const selectList = (state: ListReducerState, { payload }: SelectListActionTypes) => {
  return {
    ...state,
    selectedList: payload.selectedList
  }
}

const newNotification = (state: ListReducerState) => {
  const newNotification = `Notification ${state.notificationList.length}`

  return {
    ...state,
    notificationList: [
      ...state.notificationList,
      newNotification
    ]
  }
}

const deleteNotification = (state: ListReducerState, { payload }: DeleteNotification) => {
  const newNotificationList = state.notificationList.filter(notif => notif !== payload.notificationItem)

  return {
    ...state,
    notificationList: newNotificationList
  }
}

const listReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case actionTypes.SELECT_LIST: return selectList(state, action);
    case actionTypes.NEW_NOTIFICATION: return newNotification(state);
    case actionTypes.DELETE_NOTIFICATION: return deleteNotification(state, action);
    default: return state;
  }
}

export default listReducer
