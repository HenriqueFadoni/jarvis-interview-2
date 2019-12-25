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
