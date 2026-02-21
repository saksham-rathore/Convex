import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Body from './components/body.jsx'
import Hero from './components/hero.jsx'

createRoot(document.getElementById('root')).render(<App />)
