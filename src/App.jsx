import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import './App.css'
import Emojis from './components/Emojis'
import ReactionCounter from './components/ReactionCounter';

const socket = io('http://localhost:3001');

function App() {

  const [reactions, setReactions] = useState({});
const sendReaction = (emoji)=>{
  socket.emit("send_reactions", emoji);
}

useEffect (()=>{
  
  socket.on("reaction_display", (data)=>{
    console.log('receiving data from server')
    setReactions(data);
  });
  

}, []);

  return (
    <div className='app'>
      <Emojis sendReaction={sendReaction}/>
      <p>Reaction Count: </p>
      <ReactionCounter reactions = {reactions}/>
    </div>
  )
}

export default App
