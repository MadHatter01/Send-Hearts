import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import './App.css'
import Emojis from './components/Emojis'

const socket = io('http://localhost:3001');

function App() {
const sendReaction = ()=>{
  socket.emit("send_reactions", { count: "23"});
}

useEffect (()=>{
  
  socket.on("reaction_display", (data)=>{
    console.log(data.count)
  });
  

}, [socket]);

  return (
    <div className='app'>
      <Emojis sendReaction={sendReaction}/>
      <p>Reaction Count: </p>

    </div>
  )
}

export default App
