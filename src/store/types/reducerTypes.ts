import { Chart } from './chartList'

export interface ListReducerState {
  selectedList: Chart | null,
  notificationList: string[]
}
