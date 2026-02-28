import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Tokenizer from './pages/Tokenizer.tsx'
import './lib/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tokenizer" element={<Tokenizer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
