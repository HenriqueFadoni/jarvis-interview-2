import { Chart } from './chartList'

// Action Types
export const SELECT_LIST = 'SELECT_LIST'

// Action Interfaces
export interface SelectList {
  type: typeof SELECT_LIST,
  payload: {
    selectedList: Chart
  }
}

//Bundling Up and Exporting
export type SelectListActionTypes = SelectList
export type AppActions = SelectList
