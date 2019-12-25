import * as actionTypes from '../types/actionTypes'

import { ListReducerState } from '../types/reducerTypes'
import { AppActions, SelectListActionTypes } from '../types/actionTypes'

const initialState: ListReducerState = {
  selectedList: null
}

const selectList = (state: ListReducerState, { payload }: SelectListActionTypes) => {
  return {
    ...state,
    selectedList: payload.selectedList
  }
}

const listReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case actionTypes.SELECT_LIST: return selectList(state, action);
    default: return state;
  }
}

export default listReducer
