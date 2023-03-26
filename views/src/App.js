import React from "react"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login";
import Dashboard from "./pages/dashboard"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/*" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
