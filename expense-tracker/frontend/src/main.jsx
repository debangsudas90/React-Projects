import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { IncomeContextProvider } from './context/IncomeContext.js'
import { ExpenseContextProvider } from './context/ExpenseContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IncomeContextProvider>
      <ExpenseContextProvider>
        <App />
      </ExpenseContextProvider>
    </IncomeContextProvider>
  </React.StrictMode>,
)
