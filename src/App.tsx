import React, { FunctionComponent } from 'react'

import './sass/main.scss'

import ListWidget from './components/ListWidget/ListWidget'
import DropBox from './components/DropBox/DropBox'
import ChartWidget from './components/ChartWidget/ChartWidget'
import NotificationWidget from './components/NotificationWidget/NotificationWidget'

const listExample = [
  {
    name: 'Chart 1',
    data: [
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
      { time: '2019-04-16', value: 80.01 }
    ]
  },
  {
    name: 'Chart 2',
    data: [
      { time: '2019-04-17', value: 96.63 },
      { time: '2019-04-18', value: 76.64 },
      { time: '2019-04-19', value: 81.89 },
      { time: '2019-04-20', value: 74.43 }
    ]
  },
  {
    name: 'Chart 3',
    data: [
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 }
    ]
  }
];

const App: FunctionComponent = () => (
  <div>
    <ListWidget chartList={listExample} />
    <DropBox />
    <ChartWidget />
    <NotificationWidget />
    <DropBox />
  </div>
)

export default App
