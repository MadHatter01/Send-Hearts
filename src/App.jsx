import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import './App.css'
import Emojis from './components/Emojis'
import ReactionCounter from './components/ReactionCounter';

const SERVER_URL = import.meta.env.VITE_API_URL
const socket = io(SERVER_URL);

function App() {
  const [serverOnline, setServerOnline] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [reactions, setReactions] = useState({});
  const sendReaction = (emoji) => {
    socket.emit("send_reactions", emoji);
  }

  useEffect(() => {

    socket.on('connect_error', ()=>{
      setServerOnline(false);
      setErrorMessage('Unable to connect to the server. Please try again later');
    })

    socket.on('connect', () => {
      setServerOnline(true);
      setErrorMessage('');
    });
    socket.on("reaction_display", (data) => {
      console.log('receiving data from server')
      setReactions(data);
    });

    return () => {
      socket.off('connect_error');

      socket.off('reaction_display');
    }


  }, []);

  if (!serverOnline) {
    return <div className='error-message'>{errorMessage}</div>;
  }

  return (
    <div className='app-container'>
      <Emojis sendReaction={sendReaction} />
      <ReactionCounter reactions={reactions} />
    </div>
  )
}

export default App
