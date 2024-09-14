import { useState } from 'react'

import './App.css'
import Emojis from './components/Emojis'

function App() {


  return (
    <div className='app'>
      <Emojis />
      <p>Reaction Count: </p>

    </div>
  )
}

export default App
