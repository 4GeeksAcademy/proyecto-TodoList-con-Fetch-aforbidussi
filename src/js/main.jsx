import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import '../styles/estructura.css'
import '../styles/TrainingList.css'

// components
import TraininGym from './components/TraininGym';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TraininGym/>
  </React.StrictMode>,
)
