import React from 'react'
import ReactDOM from 'react-dom/client'

export function App() {
  return (
    <div>
      <h1>Hello Word!</h1>
      <p>Olá</p>
    </div>

  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
