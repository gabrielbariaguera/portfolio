import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <About/>
    <Projects/>
    <Contact/>
  </StrictMode>,
)
