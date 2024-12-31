import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import List from './List.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <List></List>
    {/* <Listt/> */}
  </StrictMode>
)