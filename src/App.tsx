import React, { FunctionComponent } from 'react'

import ListWidget from './components/ListWidget/ListWidget'
import DropBox from './components/DropBox/DropBox'

const listExample = ['List 1', 'List 2', 'List 3'];

const App: FunctionComponent = () => (
  <div>
    <ListWidget list={listExample} />
    <DropBox />
    <DropBox />
  </div>
)

export default App
