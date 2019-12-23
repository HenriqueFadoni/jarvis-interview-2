import React, { FunctionComponent } from 'react'

import ListWidget from './components/ListWidget/ListWidget'

const App: FunctionComponent = () => (
  <div>
    <ListWidget 
      list={['List 1', 'List 2', 'List 3']}
    />
  </div>
)

export default App
