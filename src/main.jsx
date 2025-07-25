import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {Hello as Abhi, App as Kumar} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Abhi />
    <Kumar />
  </StrictMode>,
)
