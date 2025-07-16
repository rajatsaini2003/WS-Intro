import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const ref=useRef()
  function sendMessage() {
    if(!socket)return;
    const message= ref.current.value;
    //@ts-ignore
    socket.send(message);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    
    ws.onmessage = (event) => {
      alert('Message from server: ' + event.data);
    }
  }, []);
  return (
    <div>
      <input ref={ref} type='text' placeholder='Message...'></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
