import React from 'react'
import ReactDOM from 'react-dom/client'

export function App(){
  return(
      <h1>Hello Word!</h1>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
