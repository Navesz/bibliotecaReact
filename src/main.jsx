import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Login from './pages/Login'
import NewBook from './pages/NewBook'
import UpdateBook from './pages/UpdateBook'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/new-book" element={<NewBook />} />
      <Route path="/update-book" element={<UpdateBook />} />
    </Routes>
  </BrowserRouter>
)
