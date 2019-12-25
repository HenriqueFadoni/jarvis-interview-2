export interface ChartData {
  time: string,
  value: number
}

export interface Chart {
  name: string,
  data: Array<ChartData>
}

export interface ChartList {
  chartList: Array<Chart>
}
