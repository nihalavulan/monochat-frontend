import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Chat from '../pages/Chat'
import ChatConversation from '../pages/ChatConversation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatConversation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

