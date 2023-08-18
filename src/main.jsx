import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes, Route, BrowserRouter } from "react-router-dom";


import Home from './Home/Home';
import Todo from './Todo/Todo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
