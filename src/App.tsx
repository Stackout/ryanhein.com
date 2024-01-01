import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Consulting from './pages/Consulting'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="grid-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
