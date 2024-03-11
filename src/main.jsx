import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from './utils/data.json'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
)
