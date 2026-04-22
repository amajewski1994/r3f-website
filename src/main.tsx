import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.1,
        smoothWheel: true,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>,
)
